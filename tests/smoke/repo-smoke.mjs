import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const REQUIRED_FILES = [
  "README.md",
  "index.html",
  "src/main.jsx",
  "src/App.jsx",
  "src/data/students.js",
  "src/test/setup.js",
];
const SKIP_DIRS = new Set([".git", "node_modules", "dist"]);
const TARGET_EXTENSIONS = new Set([".md", ".js", ".jsx", ".css", ".html", ".json", ".yml"]);
const bannedAssistantWords = [
  String.fromCharCode(99, 108, 97, 117, 100, 101),
  String.fromCharCode(99, 111, 100, 101, 120),
];
const FORBIDDEN_RULES = [
  { pattern: /\u2014/g, reason: "em-dash found (use hyphen instead)" },
  { pattern: /Co-authored-by:/gi, reason: "co-author marker found in source/docs" },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    const relative = path.relative(ROOT, absolute);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      out.push(...(await walk(absolute)));
      continue;
    }
    if (TARGET_EXTENSIONS.has(path.extname(entry.name))) {
      out.push(relative);
    }
  }
  return out;
}

async function main() {
  const failures = [];

  for (const file of REQUIRED_FILES) {
    try {
      await readFile(path.join(ROOT, file), "utf8");
    } catch {
      failures.push(`Missing required file: ${file}`);
    }
  }

  const files = await walk(ROOT);
  for (const relative of files) {
    const body = await readFile(path.join(ROOT, relative), "utf8");
    for (const word of bannedAssistantWords) {
      const pattern = new RegExp(`\\b${word}\\b`, "gi");
      if (pattern.test(body)) {
        failures.push(`${relative}: unexpected assistant branding reference`);
      }
    }
    for (const rule of FORBIDDEN_RULES) {
      if (rule.pattern.test(body)) {
        failures.push(`${relative}: ${rule.reason}`);
      }
      rule.pattern.lastIndex = 0;
    }
  }

  if (failures.length) {
    console.error("Smoke checks failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }

  console.log(`Smoke checks passed (${files.length} files scanned).`);
}

main().catch((error) => {
  console.error("Smoke checks crashed:", error);
  process.exit(1);
});

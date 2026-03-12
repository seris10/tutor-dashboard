import { readFile } from "node:fs/promises";
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

async function main() {
  const failures = [];

  for (const file of REQUIRED_FILES) {
    try {
      await readFile(path.join(ROOT, file), "utf8");
    } catch {
      failures.push(`Missing required file: ${file}`);
    }
  }

  if (failures.length) {
    console.error("Smoke checks failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }

  console.log(`Smoke checks passed (${REQUIRED_FILES.length} required files present).`);
}

main().catch((error) => {
  console.error("Smoke checks crashed:", error);
  process.exit(1);
});

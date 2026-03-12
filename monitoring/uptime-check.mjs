const uptimeUrl = (process.env.UPTIME_URL || "").trim();

if (!uptimeUrl) {
  console.error("UPTIME_URL is required.");
  process.exit(1);
}

async function checkSite(url) {
  const response = await fetch(url, {
    method: "GET",
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} from ${url}`);
  }

  const html = await response.text();
  if (!html.includes("<div id=\"root\"></div>") && !html.includes("id=\"root\"")) {
    throw new Error("Missing root app container marker in response body");
  }
}

async function main() {
  console.log(`Checking uptime for ${uptimeUrl}`);
  await checkSite(uptimeUrl);
  console.log("Uptime check passed.");
}

main().catch((error) => {
  console.error("Uptime check failed:", error instanceof Error ? error.message : String(error));
  process.exit(1);
});

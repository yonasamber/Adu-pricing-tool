const fs = require("fs");
const { type } = require("os");

try {
  const data = JSON.parse(fs.readFileSync("pricing.json", "utf8"));

  if (!Array.isArray(data)) {
    throw new Error("pricing.json must be an array");
  }
  data.forEach((item, index) => {
    if (!item.item || !item.unit || typeof item.price !== "number") {
      throw new Error(
        `Invalid item at index ${index}: ${JSON.stringify(item)}`,
      );
    }
  });
  console.log("pricing.json validation passed");
  process.exit(0);
} catch (err) {
  console.error("pricing.json validation failed:", err.message);
  process.exit(1);
}

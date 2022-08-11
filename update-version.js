const semver = require("semver");
const fs = require("fs");
const currentVersion = require("./package.json").version;

let release = process.argv[2] || "minor";
const validRelease = ["minor", "major", "patch"];
if (!validRelease.includes(release)) {
  console.error("😢 invalid release, must be " + validRelease.join(", "));
  process.exit(1);
}

const newVersion = semver.inc(currentVersion, release);

// Replace the version in the package.json file via regex and save it
const packageJson = fs.readFileSync("package.json", "utf8");
const newPackageJson = packageJson.replace(/"version": "[^"]+"/, `"version": "${newVersion}"`);
fs.writeFileSync("package.json", newPackageJson);

// Replace the version in the badge in ../README.md via regex and save it
const readme = fs.readFileSync("./README.md", "utf8");
const newReadme = readme.replace(/version-(\d+\.\d+\.\d+)-blue/, `version-${newVersion}-blue`);
fs.writeFileSync("./README.md", newReadme);

console.log("🥳 Updated version to " + newVersion);

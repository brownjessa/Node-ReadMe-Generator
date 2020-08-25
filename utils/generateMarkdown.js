function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This project is licensed under the ${license} license.`;
  }
  return "";
}

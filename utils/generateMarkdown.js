api = require("./api");
function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}
function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under the ${license} license.`
    )
  }
  return ''
}
function generateMarkdown(data, apiData) {
  return `
# Github Username:
${data.username}
# Table of contents
[Title](#Project-Title)

[Descripton](#Project-Description)

[Install Commands](#Install-Commands)

[License](#license)

[Contributors](#Contributors)

[Questions](#Questions)

# Project Title:
${data.title}
# Project Description:
${data.description}
# Install Commands
${data.installation}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license, data.username, data.title)}
# Contributors
${data.contributors}
# Test Commands
${data.tests}
# Questions
If you have any questions, here is my github!
My Email: ${data.email}
My Avatar: ${apiData.data.avatar_url}
`;

}
module.exports = generateMarkdown;
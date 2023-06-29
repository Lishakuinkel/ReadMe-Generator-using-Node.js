// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [License] (#license)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)

  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  For testing, run the following command:
  ${data.tests}

  ## Questions
  If you have any questions regarding this project, contact me directly at ${data.email}  
  My Github handle is ${data.github}

`;
}

module.exports = generateMarkdown;

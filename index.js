const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'profile name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location place',
      message: 'What is your location?',
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is your LinkedIn profile name?',
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

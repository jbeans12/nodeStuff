const inquirer = require('inquirer');
const fs = require('fs');


const html = createHTML(
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
)


  .then((data) => {
    

    fs.writeFile('index.html', html, function (err) {
        if (err) console.log(err)
      })
  });

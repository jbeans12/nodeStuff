const inquirer = require('inquirer');
const fs = require('fs');


    inquirer
  .prompt([
    {
      type: 'input',
      name: 'profilename',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your location?',
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is your LinkedIn profile name?',
    },
  ])
  .then((data) => {
    console.log(data)
    
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>

      <div id="profile">
        <h2>${data.profilename}</h2>
        <p> ${data.location}</p>
        <p> ${data.url}</p>
      </div>
      
      <script type="text/javascript" src="index.js"></script>
    </body>
    </html>`;
  
    fs.writeFile('index.html', html, function (err) {
        if (err) console.log(err)
      })
  });


 

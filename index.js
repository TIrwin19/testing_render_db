const inquirer = require('inquirer')
const fs = require('fs')

function generateHTML(answerObj) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${answerObj.name}</h1>
    <p>Favorite color: ${answerObj.color}</p>
    <p>Address: ${answerObj.address}</p>
</body>
</html>
`
    fs.writeFile('./index.html', html, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log('HTML generated successfully!')
    })
}

function getAnswers(){
    inquirer.prompt([
        {
            name: 'color',
            message: 'Whats your favorite color?'
        },
        {
            name: 'name',
            message: 'Please type your name'
        },
        {
            name: 'address',
            message: 'Please type your address'
        }
    ]).then((answerObj) => {
        generateHTML(answerObj)
    }).catch((err) => {
        console.log(err)
    })
}

getAnswers()
const fs = require('fs');

generatePage = (employeeArray) => {
    var cardArray = [];
    for(let i=0; i < employeeArray.length; i++){
        var position = employeeArray[i].getRole();
        
        
        if(position === 'Manager'){
            cardArray.push(managerHTML(employeeArray[i]));
        }else if(position === 'Engineer'){
            cardArray.push(engineerHTML(employeeArray[i]));
        }else if(position === 'Intern'){
            cardArray.push(internHTML(employeeArray[i]));
        }

    }
    const employeeSection = cardArray.join('');
    generateHTML(employeeSection);
}
const managerHTML = (manager) => {
    return `
    <article class="card has-background-light">
            <div class="header-card has-background-primary ">
                <p class="title has-text-white">
                    ${manager.name}
                </p>
                <p class="subtitle">
                    Manager
                </p>
            </div>
            <div class="card-content">
                <div class="content has-background-white">
                    <p class="sub-section">ID: ${manager.id}</p>
                    <p class="sub-section">Email: <a href="mailto:${manager.email}" class="anchor">${manager.email}</a></p>
                    <p class="sub-section">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </article>`
}

const engineerHTML = (engineer) => {
    return `
    <article class="card has-background-light">
            <div class="header-card has-background-primary ">
                <p class="title has-text-white">
                    ${engineer.name}
                </p>
                <p class="subtitle">
                    Engineer
                </p>
            </div>
            <div class="card-content">
                <div class="content has-background-white">
                    <p class="sub-section">ID: ${engineer.id}</p>
                    <p class="sub-section">Email: <a href="mailto:${engineer.email}" class="anchor">${engineer.email}</a></p>
                    <p class="sub-section">Github: <a href="https://github.com/${engineer.github}" class="anchor">${engineer.github}</a></p>
                </div>
            </div>
        </article>`
}

const internHTML = (intern) => {
    return `<article class="card has-background-light">
    <div class="header-card has-background-primary ">
        <p class="title has-text-white">
            ${intern.name}
        </p>
        <p class="subtitle">
            Intern
        </p>
    </div>
    <div class="card-content">
        <div class="content has-background-white">
            <p class="sub-section">ID: ${intern.id}</p>
            <p class="sub-section">Email: <a href="mailto:${intern.email}" class="anchor">${intern.email}</a></p>
            <p class="sub-section">School: ${intern.school}</p>
        </div>
    </div>
</article>
`
}

const generateHTML = (employeeSection) => {
    var employeeCards = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <section class="block">
            <header class="hero is-primary">
                <div class="hero-body has-text-centered">
                    <h1 class="main-title title is-1">My Team</h1>
                </div>
            </header>
        </section>
    
        <section class="block" id="card-slots">
            ${employeeSection}
        </section>
    </body>
    
    </html>`
    writeFile(employeeCards);
}
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile page generated")
        }
    })
};

module.exports = generatePage;
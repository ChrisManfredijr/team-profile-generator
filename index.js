const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generate-page');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employeeArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "please enter your managers name:",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("please enter a name")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'id',
            message: "please enter manager ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("please enter an id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "please enter manager email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("please enter an email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "please enter managers office number:",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("please entire office number");
                    return false;
                }
            }
        }

    ])
    .then(managerData => {
        const { name, id, email, office } = managerData;
        const manager = new Manager(name, id, email, office);
        employeeArray.push(manager);
        addEmployees();
    })

};
//employee add

const addEmployees = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'Which employee type would you like to add next? ',
            choices: ['Engineer', 'Intern', 'Finish team (build site)'],
            default: ['Engineer'],
        },
        {
            type: 'input',
            name: 'name',
            message: "please enter the employee name:",
            when: (input) => input.position != "Finish team (build site)",
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("please enter a name")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'id',
            message: "please enter employee ID:",
            when: (input) => input.position != "Finish team (build site)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("please enter an id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "please enter employee email:",
            when: (input) => input.position != "Finish team (build site)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("please enter an email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username',
            when: (input) => input.position === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("please enter github");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school:',
            when: (input) => input.position === 'Intern',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                }else{
                    console.log("please enter school");
                    return false;
                }
            }
        }
        
    ])
    .then(employeeData => {
        
        let {position, name, id, email,github, school} = employeeData;

        if(position === 'Engineer'){
            const engineer = new Engineer(name, id, email, github);
            employeeArray.push(engineer);
            addEmployees();

        }else if(position === 'Intern'){
            const intern = new Intern(name, id, email, school);
            employeeArray.push(intern);
            addEmployees();

        }else{
            generatePage(employeeArray);
        }
       
    })
};


addManager();
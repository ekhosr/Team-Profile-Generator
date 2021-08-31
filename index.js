const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");
const render = require("./src/template.js");
const teamArr = [];
const idArr = [];

function initApp() {
  function addManager() {
    console.log("Create Your Team Profile");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please Enter the Manager's Name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter Team's Manager's Name:";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "Please Enter the Manager's ID:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter a Valid ID:";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Please Enter the Manager's Email Address:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter a Valid Email address:";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Please Enter the Manager's Office Phone Number:",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please Enter a Valid Phone Number:";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeam();
      });
  }

  function addTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Plese Choose If You Want to Add More or Exit the Application?",
          choices: ["1) Engineer", "2) Intern", "3) Exit the Application and Generate the Team Profile"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            generateHTML();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Please Enter the Engineer's Name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter the Engineer's Name:";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "Please Enter the Engineer's ID:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter a Valid Engineer's ID:";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Please Enter the Engineer's Email Address:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter the Engineer's Email Address:";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Please Enter the Engineer's GitHub Username:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter the Engineer's GitHub Username:";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArr.push(engineer);
        idArr.push(answers.engineerId);
        addTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Please Enter the Intern's Name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter the Intern's Name:";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "Please Enter the Intern's ID:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter a Valid Intern's ID:";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "Please Enter the Intern's Email Address:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter the Intern's Email Address:";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Please Enter the Intern's School:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please Enter the Intern's School:";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArr.push(intern);
        idArr.push(answers.internId);
        addTeam();
      });
  }

  function generateHTML() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    console.log("Your Team Profile Will Be Ready in a Second.... ");
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
  }

  addManager();
}

initApp();

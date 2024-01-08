const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Array to store team data
const team = [];

// Function to promput user to add employees
function addEmployees() {
    inquirer
        .prompt([
            {
                name: "employees",
                type: "list",
                message: "Choose an employee to add. Select 'Done' when you're finished.",
                choices: ["Manager", "Engineer", "Intern", "Done"],
            },
        ])
        .then((emp) => {
            if (emp.employees === "Manager") {
                inquirer
                    .prompt([
                        {
                            name: "name",
                            type: "input",
                            message: "Enter the Manager's name: ",
                        },
                        {
                            name: "id",
                            type: "number",
                            message: "Enter Manager's ID number: ",
                        },
                        {
                            name: "email",
                            type: "input",
                            message: "Enter Manager's email address: ",
                        },
                        {
                            name: "office",
                            type: "number",
                            message: "Enter Manager's office number: ",
                        },
                    ])
                    .then((man) => {
                        // Create a new object based on user's input
                        const manager = new Manager(man.name, man.id, man.email, man.office);
                        // Push team members to array
                        team.push(manager);
                        // Recursively call function until user selects "Done"
                        addEmployees();
                    });
            } else if (emp.employees === "Engineer") {
                inquirer
                    .prompt([
                        {
                            name: "name",
                            type: "input",
                            message: "Enter the Engineer's name: ",
                        },
                        {
                            name: "id",
                            type: "number",
                            message: "Enter Engineer's ID number: ",
                        },
                        {
                            name: "email",
                            type: "input",
                            message: "Enter Engineer's email address: ",
                        },
                        {
                            name: "github",
                            type: "input",
                            message: "Enter Engineer's GitHub profile: ",
                        },
                    ])
                    .then((eng) => {
                        const engineer = new Engineer(eng.name, eng.id, eng.email, eng.github);
                        team.push(engineer);
                        addEmployees();
                    });
            } else if (emp.employees === "Intern") {
                inquirer
                    .prompt([
                        {
                            name: "name",
                            type: "input",
                            message: "Enter the Intern's name: ",
                        },
                        {
                            name: "id",
                            type: "number",
                            message: "Enter Intern's ID number: ",
                        },
                        {
                            name: "email",
                            type: "input",
                            message: "Enter Intern's email address: ",
                        },
                        {
                            name: "school",
                            type: "input",
                            message: "Enter Intern's school: ",
                        },
                    ])
                    .then((int) => {
                        const intern = new Intern(int.name, int.id, int.email, int.school);
                        team.push(intern);
                        addEmployees();
                    });
            } else {
                // When user selects "Done" call renderPage() function
                renderPage(team);
            }
        });
}

// Function to render HTML page
function renderPage(content) {
    // Check if file exists, if it doesn't, create one
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Pass content into the render function to generate HTML
    const html = render(content);
    // Write rendered HTML content to file
    fs.writeFileSync(outputPath, html);
    // Inform user that file has been created.
    console.log(`HTML generated: ${outputPath}`);
}

addEmployees();

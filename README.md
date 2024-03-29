# team-profile-generator

## Description

This is a command-line program written in Node.js. This program is designed to generate a Team Profile page in HTML format based on the user's input.

The user is prompted to add team members and their details via the command-line using the Inquirer module.

User's can add Managers, Engineers, and Interns to the team and a seperate card will be generated for that team member - populated with the team member's information, as entered by the user.

Below is an image displaying the web page that is generated once upon following the command-line prompts.

![Team Profile](assets/HTML.png)

Several Jest tests have been pre-written for the program and I have ensured that my code passes these tests. Below is a screenshot showing that all tests pass.

![Jest Tests](assets/tests.png)

## Usage

To use this program, first, clone the repo to your system.

-   Open the terminal in the root directory (containing index.js)
-   Run `npm install` to install all necessary modules
-   Run `node index` or `node index.js` to execute the command-line program
-   Follow the prompts and select "Done" when finished.

A HTML page will be generated and placed in a directory called "output"

## Credits

This program uses the Jest and Inquirer modules and Bootstrap for styling.

## License

MIT

//Imports NPM modules
const fs = require('fs');
const inquirer =require('inquirer');

//Defines SVG Class
class Svg{}
//Questions about the logo design
inquirer
  .prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 Characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a text color (keyword or hexadecimal)"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape",
        choices: ["Circle", "Square", "Triangle", ]
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a shape color (keyword or hexadecimal)"
    }
  ]);
  
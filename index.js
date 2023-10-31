//Imports NPM modules
const fs = require('fs');
const inquirer = require('inquirer');

//Imports shapes from library
const {Circle, Square, Triangle} = require('./lib/shapes');

//Constructor creates SVG element
class SVG {
    constructor() {
        this.textElement = textElement;
        this.shapeElement = shapeElement;
    };
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    };
    //For some reason `${color}` kept breaking, so used "${color}" instead. Not familiar enough with this format yet.
    setTextElement(text,color) {
        this.textElement = <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
    };
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    };
}

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

//Prints the data into the logo.svg file
function writeToFile(fileName, data) {
    const fileName = `./logo.svg`;

    fs.writeFile(filename, (data), (err) =>
      err ? console.log(err) : console.log('SVG generated successfully')
    );
}

//initializes the program
function init(){
    let svgString = "";
    let svgFile = "logo.svg";

    const answers = inquirer.prompt(questions)

    let userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text;
    } else {
        console.log("Error: Enter 1-3 characters")
    return;
    }

    let userShape = "";
    if (userShape_type === "Circle"){
        userShape = new Circle();
        console.log("Selection: Circle")
    } else if (userShape_type === "Square"){
        userShape = new Square();
        console.log("Selection: Square")
    } else if (userShape_type === "Triangle"){
        userShape = new Triangle();
        console.log("Selection: Triangle")
    }
    
}
init();
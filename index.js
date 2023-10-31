//Imports NPM modules
const fs = require('fs');
const inquirer = require('inquirer');

//Imports shapes from library
const {Circle, Square, Triangle} = require('./lib/shapes');

//Constructor creates SVG element
class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    };
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    };
    //For some reason `${color}` kept breaking, so used "${color}" instead. Not familiar enough with this format yet.
    setTextElement(text,color) {
        this.textElement = `<text x = "150" y = "125" font-size = "60" text-anchor="middle" fill="${color}">${text}</text>`
    };
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    };
}

//Questions about the logo design
const questions = [
    {
    type: "input",
    name: "text",
    message: "Enter up to 3 Characters",
    },
    {
    type: "input",
    name: "textColor",
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
    name: "shapeColor",
    message: "Enter a shape color (keyword or hexadecimal)"
    }
]
//Writes to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) { 
            return console.log(err);
        }
        console.log("Generated logo.svg")
    })
}
async function init() {
    let svgString = "";
    let svgFile = "logo.svg";
    //Starts the inquirer
    const answers = await inquirer.prompt(questions);

    let userText = ""
    if (answers.text.length > 0 && answers.text.length < 4) {
            userText = answers.text;
        } else {
            console.log("Error: Enter 1-3 characters")
        return;
        }
    userFontColor = answers.textColor
    userShapeColor = answers.shapeColor
    userShapeType = answers.shape

    let userShape = ""
    if (userShapeType === "Circle"){
        userShape = new Circle();
        console.log("Selection: Circle")
    } else if (userShapeType === "Square"){
        userShape = new Square();
        console.log("Selection: Square")
    } else if (userShapeType === "Triangle"){
        userShape = new Triangle();
        console.log("Selection: Triangle")
    }
    userShape.setColor(userShapeColor)

    let svg = new SVG();
    svg.setTextElement(userText, userFontColor)
    svg.setShapeElement(userShape)
    svgString = svg.render();

    writeToFile(svgFile, svgString)
}
init()

//!! Below is mew checklisting the acceptance critera!!
// GIVEN a command-line application that accepts user input

// WHEN I am prompted for text
// THEN I can enter up to three characters (completed)

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number) (Compelted)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square (Completed)

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number) (Completed)

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line (Completed)

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered (Completed)


//!!!Below is a failed experimental version, keeping to work on in future, but will not be used for now!!!
// const questions = [inquirer
//   .prompt([
//     {
//         type: "input",
//         name: "text",
//         message: "Enter up to 3 Characters",
//     },
//     {
//         type: "input",
//         name: "text-color",
//         message: "Enter a text color (keyword or hexadecimal)"
//     },
//     {
//         type: "list",
//         name: "shape",
//         message: "Choose a shape",
//         choices: ["Circle", "Square", "Triangle", ]
//     },
//     {
//         type: "input",
//         name: "shape-color",
//         message: "Enter a shape color (keyword or hexadecimal)"
//     }
//   ])
//   .then((data) => {
//     const filename = `./logo.svg`
//     const answers = inquirer.prompt(questions);
//     let userText = "";

    // if (answers.text.length > 0 && answers.text.length < 4) {
    //     userText = answers.text;
    // } else {
    //     console.log("Error: Enter 1-3 characters")
    // return;
    // }

//     let userShape = "";
//     userShapeColor = answers.shape-color
//     userShapeType = answers[shape]
//     if (userShapetype === "Circle"){
//         userShape = new Circle();
//         console.log("Selection: Circle")
//     } else if (userShapetype === "Square"){
//         userShape = new Square();
//         console.log("Selection: Square")
//     } else if (userShapetype === "Triangle"){
//         userShape = new Triangle();
//         console.log("Selection: Triangle")
//     }
//     userShape.setColor(userShapeColor)
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('logo.svg: generated successfully')
//   );
//   })];
//initializes the program
// async function init(){
//     let svgString = "";
//     let svgFile = "logo.svg";

//     const answers = await inquirer.prompt(questions)

//     let userText = "";
//     if (answers.text.length > 0 && answers.text.length < 4) {
//         userText = answers.text;
//     } else {
//         console.log("Error: Enter 1-3 characters")
//     return;
//     }

//     let userShape = "";
//     if (userShape_type === "Circle"){
//         userShape = new Circle();
//         console.log("Selection: Circle")
//     } else if (userShape_type === "Square"){
//         userShape = new Square();
//         console.log("Selection: Square")
//     } else if (userShape_type === "Triangle"){
//         userShape = new Triangle();
//         console.log("Selection: Triangle")
//     }
    
// }
// init();
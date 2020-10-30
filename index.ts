console.clear();

import { Interpreter } from "./02-interpreter/interpreter";
import { Program } from "./01-program/program";

console.log("%c red", "color: red");
const description = Program.createDescription(["yolo"]);
console.log("%c green", "color: green");
Interpreter.interpret(description);

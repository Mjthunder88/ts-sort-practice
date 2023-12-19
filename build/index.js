"use strict";
// * concurrenlty helps you run multiple sripts at the same time. The last line of code is what is telling concurrenlty to look for and run those all at the same time
// TODO "scripts": {
// TODO   "start:build": "tsc-w",
// TODO   "start:run": "nodemon build/index.js",
// TODO   "start": "concurrently npm:start:*"
// TODO },
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumCollection = new NumbersCollection_1.NumberCollection([10, 35, -2, 1]);
NumCollection.sort();
console.log(NumCollection.data);
const charCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charCollection.sort();
console.log(charCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

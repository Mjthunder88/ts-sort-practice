// * concurrenlty helps you run multiple sripts at the same time. The last line of code is what is telling concurrenlty to look for and run those all at the same time
// TODO "scripts": {
// TODO   "start:build": "tsc-w",
// TODO   "start:run": "nodemon build/index.js",
// TODO   "start": "concurrently npm:start:*"
// TODO },

/* This is the eqivilent to the short cut down on sorter.js 
Just by using the (public Modifier)
class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }
}
*/

// ? ------------------------------------

import { Sorter } from './Sorter';
import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const NumCollection = new NumberCollection([10, 35, -2, 1]);
NumCollection.sort();
console.log(NumCollection.data);

const charCollection = new CharactersCollection('Xaayb');
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

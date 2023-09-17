/** Arrays js are Dynamic */

// const cities = [
//     'Munmbai', 
//     'Delhi', 
//     'calcutta', 
//     'Chennai', 
//      'Pune'
// ];

// console.log(cities.length)

// cities[2] = 'Kolkata'

// console.log(cities)

/** Adding an element  */

// push()

const teams = ['CSK','RCB','MI','LSG'];
console.log(teams); 

const pushArray = teams.push('GT');

console.log(pushArray);

// unshift()
const unshiftArray = teams.unshift('KKR');
console.log(unshiftArray)

/** Removing an elents */

// pop()
const popArray = teams.pop();
console.log(popArray);
// shift()
const shiftArray = teams.shift();
console.log(shiftArray);

/** Check the element is present or not */

// indexof()

// includes()
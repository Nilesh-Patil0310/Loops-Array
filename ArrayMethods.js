// /** Arrays js are Dynamic */

// // const cities = [
// //     'Munmbai',
// //     'Delhi',
// //     'calcutta',
// //     'Chennai',
// //      'Pune'
// // ];

// // console.log(cities.length)

// // cities[2] = 'Kolkata'

// // console.log(cities)

// /** Adding an element  */

// // push()

// const teams = ["CSK", "RCB", "MI", "LSG"];
// console.log(teams);

// const pushArray = teams.push("GT");

// console.log(pushArray);

// // unshift()
// const unshiftArray = teams.unshift("KKR");
// console.log(unshiftArray);

// /** Removing an elents */

// // pop()
// const popArray = teams.pop();
// console.log(popArray);
// // shift()
// const shiftArray = teams.shift();
// console.log(shiftArray);

// /** Check the element is present or not */

// // indexof()
// const RCBindex = teams.indexOf("RCB");
// console.log(RCBindex);
// const GTindex = teams.indexOf("GT");
// console.log(GTindex);

// // includes()
// const rcbIncludes = teams.includes("RCB");
// console.log(rcbIncludes);

// // slice() and splice()

// console.log(teams);
// console.log(teams.slice(2));
// console.log(teams.slice(-1));
// console.log(teams.slice(-2));
// console.log(teams.slice(-3));
// console.log(teams);

// // splice()

// teams.splice(2, 0, "GT");
// console.log(teams);

// teams.splice(2, 1, "HRB", "RR");
// console.log(teams);

// // concat()

// const teams1 = ["IND", "AUS", "SL"];

// const mergeTeams = teams.concat(teams1);
// console.log(mergeTeams);

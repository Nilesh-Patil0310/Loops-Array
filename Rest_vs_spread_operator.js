const aprilbatch = ["kiran", "dada", "dhanu"];
const maybatch = ["nilu", "ganu"];
const junebatch = ["manu"];
const jullybatch = [];

// function addstudent(batch, student) {
//     batch.push(student);
//     console.log(batch);
// }

// addstudent(junebatch, 'dipali');
// addstudent(maybatch, 'bhushan');

// function using Rest.. operator

function addstudent(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}

addstudent(junebatch, "dipali", "nilesh", "patil");
addstudent(jullybatch, "banti", "nana", "mahesh", "vishal");

// spread operator



const newbatch = [...aprilbatch];

aprilbatch.push('pravin')
console.log(newbatch);
console.log(aprilbatch);



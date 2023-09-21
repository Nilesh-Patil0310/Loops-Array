const input = [1,2,3,4,5,6,7,8,10,11,12,13];

const evenNumber = [];

for (let i of input) {
    if (i % 2 !== 0) {
        continue;
    }
    evenNumber.push(i);

    if (evenNumber.length === 5){
        break;
    }
    console.log(evenNumber);
}

console.log(evenNumber);
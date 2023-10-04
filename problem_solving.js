// arr1 = [1,2,4,5,7];
// arr2 = [3,4,6,7,9,0];
// function mergeArray(arr1,arr2){

//     const merge = [...arr1, ...arr2];

//     const myset = new Set(merge);

//     const merged = [...myset]

//     return merged
    
// }
// console.log(mergeArray(arr1,arr2));
// //Output : [1,2,4,5,7,3,6,9,0]

const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
    };
    function findClassTopper(studentMarks){
        const avarageArray = [];

        for (let student in studentMarks){
            function avrg(student){
                const sum = 0;
                for (let marks of student) {
                    sum = sum + marks;
                }
                const avrage = sum / student.length

                return avarageArray.push(avrage);
            }
        }
        let max = avarageArray[0];
        for (let i = 0; i < avarageArray.length; i++){
            if (avarageArray[i] > max){
                max = avarageArray[i]
            }
            
        }
        return max

    }
    console.log(findClassTopper(studentMarks));
    //Output : "Jane";
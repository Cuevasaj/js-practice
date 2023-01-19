//  Create a function that receives an array of numbers and returns an array containing only the positive number's.

const testAry = [-1, 2, 3, 4, -5, 6, 7, -8, 9, -10];

//creating array
function functAryPos(arr) {
  const resultArry = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    //console.log(item);
    if (item >= 0) {
      //console.log(item);
      resultArry.push(item);
    }
  }
  return resultArry;
}

const res = functAryPos(testAry);
// console.log(res);

function add(a, b) {
  const sum = a + b;
  return sum;
}

// console.log(add(1, 3));

// Find the maximum number in an array of numbers,
//Find the highest number in an array,
//The function should take in an array of numbers and return the highest number in the array


const testTwoArray = [231, 42, 453, 324, 3, 6, 7, 32, 9, 210];

function maxNum(arr) {
    for(let i = 0; i < arr.length;i ++ ){
        const number = arr[i]
        if(number)
    }
}


for()
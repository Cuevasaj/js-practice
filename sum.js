// We need a function that that prints the sum of numbers 1-10

function oneThroughTen() {
  // starting at zero
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }
  console.log(sum);
}

//oneThroughTen();

//takes in a number sums up to any number
function sumTwoN(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  //console.log(total);
}

sumTwoN(12948302);

// calculate the sum of numbers in the array

const testAry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function aryCalculator(arr) {
  let aryTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    aryTotal = aryTotal + arr[i];
  }
  console.log(aryTotal);
}

aryCalculator(testAry);

for (let i = 0; i <= testAry.length; i++) {
  console.log(testAry[i]);
}

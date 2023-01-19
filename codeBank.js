// write a function that counts down from 100 to 0
function countDown() {
  for (let i = 100; i >= 0; i--) {
    console.log(i);
  }
}
//countDown();
const countDownFromN = (num) => {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
};
//ountDownFromN(20)
let testAry = [];
const arraX = (arraySize, maxValue) => {
  for (let i = 0; i < arraySize; i++) {
    const inAry = Math.round(Math.random() * maxValue);
    testAry.push(inAry);
  }
  console.log(testAry);
};

arraX(10, 2);

function makeCar(make, model, year) {
  const carInfo = {
    make,
    model,
    year,
  };
  //
  return carInfo;
}
const oneCar = makeCar("toyota", "corloa", "2004");
const twoCar = makeCar("toyota", "supra", "1994");
const threeCar = makeCar("toyota", "T100", "1997");
console.log(oneCar, twoCar, threeCar);
//
const person = {
  surName: "Alexis",
  age: 19,
};

const { surName: jason, age: AGE } = person;

console.log(surName, age);
console.log(jason, AGE);
//

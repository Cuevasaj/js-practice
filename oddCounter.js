const oddCounter = () => {
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
};

//oddCounter();

function skipTwoCounter() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

skipTwoCounter();

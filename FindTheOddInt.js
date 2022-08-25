function findOdd(arr) {
    return arr.find((item) => arr.filter(el => el == item).length % 2);
  }
  
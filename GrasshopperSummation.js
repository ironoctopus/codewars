let summation = function (num) {
    return num ? num + summation(num - 1) : num;
  }
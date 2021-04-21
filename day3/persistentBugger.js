function persistence(num) {
  let multiply = function (n) {
    return n.reduce((a, b) => {
      return +a * +b;
    });
  };

  let count = 0;
  while (num.toString().length > 1) {
    num = num.toString().split("");
    num = multiply(num);

    count++;
  }
  return count;
}

function numbersWithDigitInside(x, d) {
  if (x < d) {
    return [0, 0, 0];
  }
  let arr = [];
  let count = 0;
  let sum = 0;
  let product = 1;

  for (let i = 1; i <= x; i++) {
    if (`${i}`.split("").includes(`${d}`)) {
      arr.push(i);
    }
  }
  if (arr.length < 1) product = 0;
  arr.forEach((item) => {
    count++;
    sum += item;
    product *= item;
  });
  console.log(product);
  return [count, sum, product];
}

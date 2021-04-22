/**
 * Write a function that multiply the digits of a number until it becomes a single digit
 * @param {number} num 
 * @returns {number}
 */
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

function digPow(n, p) {
  let value = n.toString().split("").reduce((acc, cur) => acc + cur ** p++, 0);
  return value % n == 0 ? value / n : -1;
}

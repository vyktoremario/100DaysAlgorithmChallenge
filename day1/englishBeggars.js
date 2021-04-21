// const beggars = (vals, n) => vals.reduce((a, v, x) => { 
//     a[x%n] += v; return a; 
//  }, Array(n).fill(0));
function beggars(values, n){
    let result = []
    if(n === 0) return result
    for (let index = 0; index < n; index++) {
      let value = 0
      for (let item =index; item < values.length; item +=n) {
        value += values[item]  
      }
   //    console.log(value)
      result.push(value)
    }
     return result
   }



//Factorial
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
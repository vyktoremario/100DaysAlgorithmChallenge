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


//    const beggars = (vals, n) => vals.reduce((a, v, x) => { 
//        a[x%n] += v; return a; 
//     }, Array(n).fill(0));
function nbDig(n, d) {
    let arr =[]
    for (let i=0; i <= n; i++) {
       arr.push(i * i)
    }
      k = arr.join('').split('')
    let count = 0
    for (let i = 0; i < k.length; i++){
      if (k[i] == d){ 
        count++
      }
    }
     return count
  }
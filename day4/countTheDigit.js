function nbDig(n, d) {
    let arr =[]
    for (let i=0; i <= n; i++) {
       arr.push(i * i)
    }
      let k = arr.join('')
      console.log(k)
      let length = k.replaceAll(`${d}`, '')
      console.log(length)
      return k.length - length
    // let count = 0
    // for (let i = 0; i < k.length; i++){
    //   if (k[i] == d){ 
    //     count++
    //   }
    // }
    //  return count
  }

  console.log(nbDig(10, 1))
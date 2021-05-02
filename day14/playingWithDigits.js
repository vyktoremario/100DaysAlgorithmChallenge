function digPow(n, p) {
  let value = n.toString().split("").reduce((acc, cur) => acc + cur ** p++, 0);
  return value % n == 0 ? value / n : -1;
}




function isSumOfCubes(s){
    let arr = [].concat(...s.replace(/[^0-9]/gi,' ').replace(/\s+/gi,' ').trim().split` `.map(v=>{
        let arr2 = []
        for (let i=0;i<v.length;i+=3){
        console.log(arr2)
        arr2.push(v.slice(i,i+3))
      }
      return arr2
    }))
    let final = arr.filter(v=>v*1===(v.split``.reduce((a,b)=>a+(b*b*b),0))).map(v=>v*1)
    return final.length?final.join` `+' '+final.reduce((a,b)=>a+b,0)+' '+'Lucky':'Unlucky'
  }

  isSumOfCubes("0 9026315 -827&()")
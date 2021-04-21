function inArray(array1,array2){
    let newArr = array2.join(" ")
    return array1.filter(word => newArr.includes(word)).sort()
  }
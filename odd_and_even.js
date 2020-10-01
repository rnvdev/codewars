function sortArray(array) {
  let newArray = [];
  let newArrayImpar = [];
  for (let i = 0; i < array.length; i++){
    array[i] % 2 == 0 ?
      newArray.push(array[i]) :
      newArrayImpar.push(array[i]);
  }
console.log(`PARES: ${newArray.sort()} | ÍMPARES: ${newArrayImpar.sort()}`);
}

sortArray([5, 3, 2, 8, 1, 4]);

//OUTPUT: 'PARES: 2,4,8 | ÍMPARES: 1,3,5'

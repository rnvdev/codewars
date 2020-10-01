/*
  You have an array of numbers.
  Your task is to sort ascending odd numbers but even numbers must be on their places.
  Zero isn't an odd number and you don't need to move it. If you have an empty array, 
  you need to return it.
  Example: sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/
function sortArray(array) {
  let captureOdd = [];
  let captureIndex = [];
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      captureOdd.push(array[i]);
      captureIndex.push(array.indexOf(array[i]))
    } else {
      resultArray[i] = array[i];
    }  
  }
  const loop = captureOdd.length;
  for (let m = 0; m < loop; m++) {
    for (let f = 0; f < loop; f++) {
      if(captureOdd[f] > captureOdd[f+ 1]) {
        let temp = captureOdd[f];
        captureOdd[f] = captureOdd[f+1];
        captureOdd[f+1] = temp;
      }
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (resultArray[j] === undefined) {
      resultArray[j] = captureOdd[0];
      captureOdd.shift();
    }
  }
  return resultArray
}

sortArray([5, 3, 2, 8, 1, 4]);
sortArray([5, 3, 1, 8, 0]);

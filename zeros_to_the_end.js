/*
 Write an algorithm that takes an array and moves all of the zeros to the end, 
 preserving the order of the other elements.
 moveZeros([false,1,0,1,2,0,1,3,"a"]) 
 // returns[false,1,1,2,1,3,"a",0,0]
 */

var moveZeros = function (arr) {
  return arr.filter(x => x > 0 || typeof x !== 'number').concat(arr.filter(x => x === 0));
}

moveZeros([false,1,0,1,2,0,1,3,"a"])
//[false, 1, 1, 2, 1, 3, 'a', 0, 0]

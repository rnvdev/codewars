//square every digit of a number.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1

function squareDigits(num){
return parseInt(('' + num).split('').map(function(val){ return val * val;}).join(''));
}
  
console.log(squareDigits(9119));

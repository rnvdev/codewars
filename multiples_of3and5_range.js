/*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
  Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number){

    let sumAll =[];
        
    for(let i = 1; i < number; i++){
      let modalOfThree = i % 3;
      let modalOfFive = i % 5;

      if(modalOfThree == 0 || modalOfFive ==0){
         sumAll.push(i);
      }
    }
    return sumAll.reduce((total, num)=> total + num, 0); 
}


console.log(solution(10));

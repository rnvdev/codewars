/*
  The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
  Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
  Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
  Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
  Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
  
  Examples:
  tickets([25, 25, 50]) // => YES 
  tickets([25, 100]) // => NO
  tickets([25, 25, 50, 50, 100]) // => NO
*/


function tickets(peopleInLine){
  let check = {25 : 0, 50 : 0, 100 : 0}
  
  for (let i = 0 ; i < peopleInLine.length ; i++){
    if(peopleInLine[i] == 25){
      check[25]++;
    }else if(peopleInLine[i] == 50){
      if(check[25] !== 0){
        check[25]--;
        check[50]++;
      }else return "NO";
    }else if(peopleInLine[i] == 100){
      if(check[25] !== 0 && check[50] !== 0){
        check[25]--;
        check[50]--;
        check[100]++;
      }
      else if(check[25] > 2){
        check[25] = check[25] - 3;
        check[100]++;
      }else return "NO";
    }
  }
  return "YES";
}


console.log(tickets([25,25,25,100,25,25,50,100,25,25,25,100,25,25,25,100,25,50,25,100,25,100,50])); //NO

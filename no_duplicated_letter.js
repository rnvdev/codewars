/*
 An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 Implement a function that determines whether a string that contains only letters is an isogram. 
 Assume the empty string is an isogram. Ignore letter case.
*/
function isIsogram(str){
    
    let result;
    let toLower = str.toLowerCase();
    let splitted = toLower.split("");
    let sortWord = splitted.sort(); 
    
    if(str.length != 0)
      for(let i = 0; i < sortWord.length; i++){
        if(sortWord[i] == sortWord[i + 1]){
          result = false;
          break;
        }else{
          result = true;
        }
    }else{
      result = true;
    }
    return result;
}

console.log(isIsogram("moOse"));

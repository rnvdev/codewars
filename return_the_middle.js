// Return the middle. If it is even, return the two in the middle.
function getMiddle(s){
    let someMath = Math.ceil((s.length)/2);
    return s.length % 2 == 0 ? `${s[someMath - 1]}${s[someMath]}` :  `${s[someMath - 1]}`;
}

console.log(getMiddle("abdn"));
console.log(getMiddle("abd"));

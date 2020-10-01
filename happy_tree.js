const tree = (target, times) => {
    let s = 5;
    for(let i = 0; i <= times; i++){
        console.log(`${" ".repeat(s)}${target.repeat(i)} ${target.repeat(i)}`);
        s--;
    }     
    console.log(`${" ".repeat(times-1)}${"| |"}`);
}

console.log(tree("*", 5));

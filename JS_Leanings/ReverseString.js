let input = "Hello Everyone"
let size = input.length
let Rinput = ""

console.log("Before Reverse - "+input);
for(let i=size-1;i>=0;i--){
    Rinput = Rinput.concat(input.charAt(i))
}

console.log("After Reverse - "+Rinput);
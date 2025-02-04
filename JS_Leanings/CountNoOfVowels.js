let input = "Count number of vowel in a string using function & loops"
input.toLowerCase()
let size = input.length
let count = 0;
console.log("Input - "+input)

for(let i=1;i<=size;i++){
    if(input.charAt(i).includes('a') || input.charAt(i).includes('e') 
        || input.charAt(i).includes('i') || input.charAt(i).includes('o') || input.charAt(i).includes('u')){
        count += 1
    }
}

console.log("Number of vowels in input - "+count)
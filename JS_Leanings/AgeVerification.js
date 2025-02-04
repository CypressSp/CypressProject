let age = 34

console.log("Person is "+AgeCalculator(age))

function AgeCalculator(x){
    let output = 
    (x<13) ? "Kid":
    (x<20) ? "Teenager":
    (x<30) ? "Youngster":
    (x<46) ? "Middle Aged":
    (x<61) ? "Elder":
    (61<x) ? "Old":"";

    return output
}
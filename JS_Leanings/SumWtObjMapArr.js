// //Using Array Function
// let num = [1,2,3,4,5,6,7,8,9]

// let rnum1 = Math.floor(Math.random()*(num.length))
// let rnum2 = Math.floor(Math.random()*(num.length))

// const adder = (a,b) => a + b

// console.log("Sum of "+num[rnum1]+" & "+num[rnum2]+" is "+adder(num[rnum1],num[rnum2]))

//---------------------------------------------
//---------------------------------------------

// //Using Objects & Array Functions
// const pricediff = {jan:100,feb:250,mar:50,apr:330,may:360,jun:290,jul:440,aug:530};

// let arry = Object.values(pricediff)
// let arry1 = Object.keys(pricediff)

// let rnum1 = Math.floor(Math.random()* 8)
// let rnum2 = Math.floor(Math.random()* 8)

// const adder = (a,b) => a + b

// console.log("Sum of ["+arry1[rnum1]+":"+arry[rnum1]+"] and ["+arry1[rnum2]+":"+arry[rnum2]+"] is "+adder(arry[rnum1],arry[rnum2]))

//---------------------------------------------
//---------------------------------------------

//Using Map Functions
const map1 = new Map();

for(let i=1;i<=10;i++){
    let rnum1 = Math.floor(Math.random()* 100)
    map1.set(i,rnum1)
}

console.log(map1)

let rnum1 = Math.floor(Math.random()* 9)
let rnum2 = Math.floor(Math.random()* 9)

const adder = (a,b) => a + b

console.log("\nSum of "+map1.get(rnum1)+" & "+map1.get(rnum2)+" is "+adder(map1.get(rnum1),map1.get(rnum2)))
let a = 100, b = 25
let func = ['add','subtract','multiply','divide']
let size = func.length

for(let i=0;i<size;i++){

    switch(func[i]){
        case "add":
            console.log(func[i]+": "+(a+b))
        break

        case "subtract":
            console.log(func[i]+": "+(a-b))
        break

        case "multiply":
            console.log(func[i]+": "+(a*b))
        break

        case "divide":
            console.log(func[i]+": "+(a/b))
        break
    }
}
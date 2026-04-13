const input = Number(process.argv[2])
const factorial = (n = input)=>{
    // base case of recursion 
    if(n === 2){
        return 2
    }
    return n * factorial(n-1)
}
console.log(factorial())
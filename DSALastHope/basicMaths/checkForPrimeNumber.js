const input = process.argv[2]

const checkForPrimeNumber = (num = input)=>{
    let countOfDivisors =2
    for(let i = 2 ; i < num; i++){
        if(countOfDivisors >2) return false
        if(num % i === 0){
            countOfDivisors++
        }
    }
    return true
}
console.log(checkForPrimeNumber())
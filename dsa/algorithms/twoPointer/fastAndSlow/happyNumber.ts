// square and add part 
const squareAndSum = (n:number):number =>{
    let sum:number = 0

    while(n > 0){
        const digit = n % 10
        sum += digit *digit
        n = Math.floor(n/10)
    }

    return sum 
}

const isHappy = (n:number):boolean =>{

    let slow:number = n
    let fast: number = n 

    do{
        slow = squareAndSum(slow)
        fast = squareAndSum(squareAndSum(fast))
    } while(slow !== fast)

    return slow ==1
}

console.log(isHappy(19))
console.log(isHappy(2))
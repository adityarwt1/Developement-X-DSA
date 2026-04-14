const fibonacciSeries = (n:number):number=>{
    if(n<= 1){
        return n
    }

    const last = fibonacciSeries(n-1);
    const secondLast = fibonacciSeries(n-2);

    return last + secondLast;
}
const inputValue = process.argv[2]
console.log(fibonacciSeries(Number(inputValue )))
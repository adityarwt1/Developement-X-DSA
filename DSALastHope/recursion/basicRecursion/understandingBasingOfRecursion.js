// printing number 0 to 10 in the basic recursion 
const printTon = (n)=>{
    // basse case of the recursion 
    if(n===1){
        console.log(n)
        return ;
    }
    printTon(n-1)
    console.log(n)
}
const input = process.argv[2]
printTon(input)
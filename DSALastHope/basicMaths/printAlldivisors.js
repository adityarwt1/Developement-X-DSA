const input = process.argv[2]

const printAllDivisors =(num = input)=>{
    for(let i = 0 ; i <= num ;i++){
        if(num %i == 0){
            console.log(i)
        }
    }
}
printAllDivisors()
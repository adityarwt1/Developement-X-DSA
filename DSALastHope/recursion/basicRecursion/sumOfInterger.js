const sumOfInterger = (input)=>{
    // base case of the value
    if(input == 1){
        return 1;
    }
    return input + sumOfInterger(input -1);
} 
const input = Number(process.argv[2])
console.log(sumOfInterger(input))
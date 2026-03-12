// in the typescript we have the mainly three type of variable called let var and cons
// diffrence in th variale start crreating from the block {}

// let for the baisc variable
{
    let letVariable = "letVariable"
    const constVariable = "constVariable"
    var varVariable = "varVariable"
}

console.log(letVariable)
console.log(constVariable)
console.log(varVariable)

// the let variable also can be assess from the outside of the 
let outSideLeVariable = "outSideLetVariable"
{
    console.log(outSideLeVariable)
}
// const unalble to access form the other block to anothher block
{
    const constVariable = "ConstVariableMeta"
}
{
    console.log()
}
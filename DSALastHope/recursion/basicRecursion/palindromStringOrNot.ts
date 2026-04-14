const recursionRun = (s:string, end:number):string=>{
    if(end ==0){
        return s[end]
    }

    return s[end] + recursionRun(s, end -1)
}
const palindromeStringOrNot = (s:string)=>{
    // base case of recursion 
    /// help of recursion find out string palindrom or not
    
    return s === recursionRun(s, s.length -1)
}
const palidromWord = "madam"
console.log(palindromeStringOrNot(palidromWord))
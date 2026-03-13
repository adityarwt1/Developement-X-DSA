// first trye
const validPalindrom = (sentence:string):boolean => {
    let left = 0;
    let right = sentence.length -1;
    while(left < right){
        while(sentence[left] === " ") left++
        while(sentence[right] === " ") right--

        if(sentence[left].toLowerCase() !== sentence[right].toLocaleLowerCase()){
            return false
        }


    }

    return true
}
const isAlNum = (word:string):boolean => /[a-zA-Z0-9]/.test(word)

const isValidPalindrome = (sentence:string):boolean => {
    let left = 0;
    let right = sentence.length -1;
    while(left < right){
        while(left < right && isAlNum(sentence[left])) left++
        while(left < right && isAlNum(sentence[right])) right--

        if(sentence[left].toLowerCase() !== sentence[right].toLocaleLowerCase()){
            return false
        }

        left++
        right--
    }

    return true
}


// fixed verision
function isPalindrome(s: string): boolean {
     let left = 0;
    let right = s.length -1;
    while(left < right){
        while(left < right && !isAlNum(s[left])) left++
        while(left < right && !isAlNum(s[right])) right--

        if(s[left].toLowerCase() !== s[right].toLocaleLowerCase()){
            return false
        }

        left++
        right--
    }

    return true
};
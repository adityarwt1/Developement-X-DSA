function twoSum(numbers: number[], target: number): number[] {
    let R:number = numbers.length -1
    let L:number = 0

    while(L<R){
        const sum:number = numbers[L] + numbers[R]

        if(sum === target) return [L+1, R+1];
        if(sum > target) R--
        else L++
    }
    return []
};
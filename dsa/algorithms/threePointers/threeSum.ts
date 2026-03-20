const threeSumBruteForce = (nums:number[], target:number):number[]=>{
    const set = new Set()
    for(let i = nums.length -1 ; i >= 0; i--){
        for(let j = 0 ; j < nums.length; j++){
            for(let k = j+1; k < nums.length;k++){
                if(nums[i]+nums[j]+nums[k] === target){
                    set.add([nums[i], nums[j], nums[k]].sort((a,b)=> a-b))
                }
            }
        }
    }
    return [...set] as number[]
}

console.log(threeSumBruteForce([-1,0,1,2,-1,-4], 5))

/// making thhe triplet whose sum is equal to the 0
const threeSum = (nums:number[]):number[][]=>{
    // sorting the array 
    nums.sort((a,b)=> a-b)
    const result :number[][] = []

    const n : number = nums.length

    for(let i : number = 0 ; i < n-2; i++){
        // skipping the duplicate 
        if(i > 0 && nums[i]=== nums[i-1]) continue; 
        if(nums[i]> 0) break;

        let L:number = i + 1
        let R:number = n -1

        while(L < R){
            const sum = nums[i] + nums[L]+ nums[R]
            if(sum === 0){
                result.push([nums[i], nums[L], nums[R]])
            while(L<R && nums[L]=== nums[L+1]) L++
            while(L<R && nums[R] === nums[R-1])R++;
                L++
                R--
            } else if(sum< 0) {
                L++ // for increase the number
            } else {
                R--
            }
        }
    }
    return result
}
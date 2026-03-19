const threeSum = (nums:number[], target:number):number[]=>{
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

console.log(threeSum([-1,0,1,2,-1,-4], 5))
const moveZeros = (nums:number[]):void=>{
    let swappingIndex = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== 0){
            [nums[i], nums[swappingIndex]] = [nums[swappingIndex], nums[i]]
            swappingIndex++
        }
    }
    
}
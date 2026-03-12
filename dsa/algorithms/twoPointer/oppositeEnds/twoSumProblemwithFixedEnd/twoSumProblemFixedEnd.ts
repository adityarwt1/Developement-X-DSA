const twoSumSampleArray = [2,7,11,15]

const twoSum = (nums:number[], target:number):number[]=>{
    const n = nums.length;
  for(let right = n -1 ; right >=  0 ; right--){
    for(let left = 0; left < right;left++){
        // condtion checking
        if(nums[left] + nums[right] === target){
            return [left , right]
        }
    }
  }

  return []
}
console.log(twoSum(twoSumSampleArray, 9))
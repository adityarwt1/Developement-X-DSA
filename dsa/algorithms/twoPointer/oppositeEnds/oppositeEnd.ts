// in the opposite end the end will be the fixed means one in the last and one in the start
const testArray = [2,3,4,5,6,7,8,9]
// problemm find the sum equal to 11

const findSumWithOppositeEnds = (nums:number[], target:number):number[]=>{
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
console.log(findSumWithOppositeEnds(testArray, 11))
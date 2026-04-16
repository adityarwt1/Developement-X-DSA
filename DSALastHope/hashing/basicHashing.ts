const hashMap = new Map()
const basicHahing = (nums:number[])=>{
    for(let i  = 0 ; i < nums.length ; i ++){
        hashMap.set(nums[i], (hashMap.get(nums[i] )|| 0)+1)
    }

}
const tesArray = [1,1,2,2,2,3]
basicHahing(tesArray)
console.log(
hashMap.get(1),
hashMap.get(2),
hashMap.get(3))
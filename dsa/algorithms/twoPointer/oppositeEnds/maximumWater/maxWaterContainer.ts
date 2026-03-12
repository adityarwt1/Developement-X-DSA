// max water container
const maxWaterContainerTestArray = [1,8,6,2,5,4,8,3,7]
// maximum water
// the logic is simple calculate in the running sum

const maxWaterContainer = (nums:number[]):number=>{
    const n = nums.length;
    let maxArea = -Infinity
    let left = 0
    let right = n-1

    // while
    while(left <= right){
        // calculate the area
        let hight = nums[left] < nums[right] ? nums[left]:nums[right]
        let width = right -left

        maxArea = Math.max(hight * width, maxArea)

        // moving the pointer
        // if pointer value becomme same
        if(nums[left] === nums[right]){
            while(nums[left] == nums[right]){
                left++
                right--
            }
        } else if(nums[left] < nums[right]) left++
        else right--
    }

    return maxArea
}
console.log(maxWaterContainer(maxWaterContainerTestArray))
const letArray = [0,1,2,3,4,2,2,3,3,4]

const removeDuplicate = (nums:number[]): number[]=>{
    // sorting array 
    nums.sort((a,b)=> a-b)
    // define pointer
    let left = 0
    let right = nums.length -1

    let window = new Set().add(nums[0])

    while(left < right){
        while(left <= right && window.has(nums[left])) left++
        // adding in the last when the pointer show
        window.add(nums[left])
        left++
    }
    
    return [...window ] as number[]
    
}
console.log(removeDuplicate(letArray))
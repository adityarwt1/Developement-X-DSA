// firs apporax of selction short
const selectionSort = (nums:number[])=>{
    // in the selction sort we need find the smallels onin the arrray and  keep swapping 
    for(let i =  0 ; i < nums.length; i++){ // this need to bet the n -2 loop
        for(let j =0; j < nums.length ; j++){ /// this loop must be the starting from the i the after 
            if(nums[j]< nums[i]){
                // swappin the eleme when found the samllend one
                [nums[j], nums[i]] = [nums[i], nums[j]] ///
            }
        }
    }
}
const testCase = [64, 25, 12, 22, 11]
// console.log(selectionSort(testCase))
// console.log(testCase)

// right code of selectio short  
const SelectionShortV2 = (nums:number[])=>{
    const n = nums.length
    for(let i = 0 ; i < n-1;i++){
        /// taking minimum spaw index 
        let minSwapIndex = i;// this is the heart of this algorithum
        for(let j = i+1; j < n;j++){
            if(nums[j]< nums[minSwapIndex]){
                minSwapIndex = j;
            }

            // swapping the element 
            if(minSwapIndex !== i){
                [nums[minSwapIndex], nums[i]] = [nums[i], nums[minSwapIndex]]
            }
        }
    }
}

SelectionShortV2(testCase)
console.log(testCase)
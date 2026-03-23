function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a,b)=> a-b)
    let closest:number = Infinity;

    for(let i = 0 ; i < nums.length -2; i++){
        let L:number = i+1
        let R:number = nums.length -1

        while(L<R){
            const sum:number = nums[i] + nums[L] + nums[R];

            // updating the closes value
            if(Math.abs(sum - target) < Math.abs(closest -target)){
                closest = sum;
            }

            if(sum ===target ) return sum;
            if(sum < target) L++
            else R--
        }
    }
    return closest
};
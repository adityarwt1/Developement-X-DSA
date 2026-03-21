const trappingRainWater = (heights:number[]):number => {
    const n = heights.length -1
    let L:number = 0
    let R:number = n-1
    let maxR:number = 0
    let maxL:number =0
    let total:number = 0

    while(L< R){
        if(heights[L] <= heights[R]){
            maxL = Math.max(heights[L], maxL)
            total += maxL - heights[L]
            L++
        } else {
            maxR = Math.max(heights[R], maxR)
            total += maxR - heights[R]
            R--
        }
    }

    return total
    
}

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]))
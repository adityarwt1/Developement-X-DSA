// selectionSort.ts
export const selectionSort = (nums: number[]): void => {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        // Swap only once after finding the minimum
        if (minIndex !== i) {
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
        }
    }
};

// Test it directly
const testCase = [64, 25, 12, 22, 11];

console.log("Before Selection Sort:", testCase);

selectionSort(testCase);

console.log("After Selection Sort: ", testCase);
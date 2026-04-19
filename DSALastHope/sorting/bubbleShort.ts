// bubbleShort.ts  ← Correct & Working Version
const helllowWorldWord = require("./../testCases/hellow.js")

const bubbleSort = (nums: number[]): void => {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }
};

// Simple test case directly here
const testCase = [64, 25, 12, 22, 11];

console.log("Before Sorting:", testCase);
bubbleSort(testCase);
console.log("After Sorting: ", testCase);
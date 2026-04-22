/**
 * Sort an array using insertion sort algorithm.
 * 
 * Time Complexity: O(n²) worst/average case, O(n) best case
 * Space Complexity: O(1)
 * 
 * @param {Array} arr - Array of comparable elements
 * @returns {Array} Sorted array
 */
function insertionSort(arr) {
    // Traverse from the second element to the end
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert key at its correct position
        arr[j + 1] = key;
    }
    
    return arr;
}

/**
 * Sort array in descending order using insertion sort.
 */
function insertionSortDescending(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
    
    return arr;
}

/**
 * Generic insertion sort with custom comparator
 */
function insertionSortWithComparator(arr, compareFn = (a, b) => a - b) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && compareFn(arr[j], key) > 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
    
    return arr;
}

// Example usage
console.log("=== Insertion Sort Examples ===\n");

// Example 1: Basic integer array
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
console.log("Sorted array:", insertionSort([...numbers]));

// Example 2: Already sorted (best case)
const sortedArr = [1, 2, 3, 4, 5];
console.log("\nAlready sorted:", insertionSort([...sortedArr]));

// Example 3: Reverse sorted (worst case)
const reverseArr = [5, 4, 3, 2, 1];
console.log("Reverse sorted:", insertionSort([...reverseArr]));

// Example 4: Descending order
const desc = [64, 34, 25, 12, 22, 11, 90];
console.log("\nDescending order:", insertionSortDescending([...desc]));

// Example 5: String array
const strings = ["dog", "cat", "elephant", "ant", "bear"];
console.log("\nSorted strings:", insertionSort([...strings]));

// Example 6: Custom comparator - sort by length
const words = ["apple", "pie", "a", "longer", "xyz"];
console.log("\nSort by length:", 
    insertionSortWithComparator([...words], (a, b) => a.length - b.length)
);

// Example 7: Objects with custom comparator
const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
];
console.log("\nSort by age:", 
    insertionSortWithComparator([...people], (a, b) => a.age - b.age)
);
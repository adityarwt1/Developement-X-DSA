const reverseArray = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;

    // swap
    [arr[start], arr[end]] = [arr[end], arr[start]];

    reverseArray(arr, start + 1, end - 1);
};

const array = [1, 2, 3];
reverseArray(array);
console.log(array);
// to mainly swapped arrra hi chahiye hoga!

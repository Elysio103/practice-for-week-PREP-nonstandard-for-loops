function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let newarr1 = [];
    for (let i = 1; i < arr.length; i += 2) {
        newarr1.push(arr[i]);
    }
    return newarr1;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let newarr2 = [];
    let lastIndex = arr.length - 1;
    if (lastIndex % 2 == 0) lastIndex -= 1;
    for (let i = lastIndex; i > 0; i -= 2) {
        newarr2.push(arr[i]);
    }
    return newarr2;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let newarr3 = [];
    for (i = 1; i < arr.length; i *= 2) {
        newarr3.push(arr[i]);
    }
    return newarr3;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let newarr4 = [];
    for (i = 1; i < arr.length; i *= n) {
        newarr4.push(arr[i]);
    }
    return newarr4;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let newarr5 = [];
    let half = arr.length / 2;
    for (i = 0; i < half; i++) {
        newarr5.push(arr[i]);
    }
    return newarr5;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let newarr6 = [];
    for (i = arr.length - 1; i > newarr6; i--) {
        newarr6.push(arr[i]);
    }
    return newarr6;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
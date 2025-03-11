// This function that counts the number of properties in the given object
function countProperties(obj) {
    // Using Object.keys() to get an array of property names from the object
    // The length of this array gives the number of properties in the object
    return Object.keys(obj).length;
}

// The expected output is 3
console.log(countProperties({ a: 1, b: 2, c: 3 }));
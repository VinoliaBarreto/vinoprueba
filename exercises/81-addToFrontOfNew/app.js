// Write your function here
function addToFrontOfNew (input, key) {
    const newArray = input.slice();
    newArray.unshift(key);
    return newArray;
}

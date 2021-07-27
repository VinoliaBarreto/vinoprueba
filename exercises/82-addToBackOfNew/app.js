// Write your function here
function addToBackOfNew (input, key){
    const newArray = input.slice();
    newArray.push(key);
    return newArray;
}
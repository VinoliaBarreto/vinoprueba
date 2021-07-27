// Write your function here
function getAllElementsButNth (array, index){
    var remove = array.splice(index, 1);
    return array;
}
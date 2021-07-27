// Write your function here
function getElementsLessThan100AtProperty (obj, key){
    var newArr= [];
    for (var key in obj){
        for (var i = 0; i < obj[key].length; i++){
            if (obj[key][i] < 100){
                newArr.push(obj[key][i]);
            }
        }
    }
    return newArr;
}
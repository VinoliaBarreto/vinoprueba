// Write your function here
function getElementsThatEqual10AtProperty (obj, key){
    var newArr= [];
    for (var key in obj){
        for (var i = 0; i < obj[key].length; i++){
            if (obj[key][i] === 10){
                newArr.push(obj[key][i]);
            }
        }
    }
    return newArr;
}
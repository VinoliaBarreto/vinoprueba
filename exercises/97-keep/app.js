// Write your function here
function keep(array, keeper) {
 
    var output=[];

    for(var i=0; i<array.length; i++){

        if (array[i] === keeper){
            output.push(array[i]);        
        }
    }
    return output;

}
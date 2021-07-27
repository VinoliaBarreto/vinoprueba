// Write your function here
function countAllCharacters (array){
    var a = array.split("");
    var obj = {};
        for(var i=0; i < a.length; i++){
            if (typeof obj[a[i]] !== 'undefined'){
                obj[a[i]]+=1;
            } 
            else {
                obj[a[i]]=1;
            }
        }
    return obj;
}


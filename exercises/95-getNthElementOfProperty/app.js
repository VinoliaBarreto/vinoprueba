// Write your function here
function getNthElementOfProperty(obj, key, n) {
    if(obj[key] === undefined){
        return undefined
    } 
    else if(Array.isArray(obj[key]) === false){
        return undefined
    }   
        return obj[key][n];
}
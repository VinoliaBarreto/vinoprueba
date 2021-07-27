// Write your function here
function select (array, obj){

  var output = {};

  for (var key of array) key in obj && (output[key] = obj[key])
  return output;
}
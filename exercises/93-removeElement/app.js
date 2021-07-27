// Write your function here
function removeElement(array, discarder) {
 
  if (typeof array === "undefined" && array === null) {
      return array;
  }
      return array.filter(function(value) {
        return value !== discarder;
    });
}
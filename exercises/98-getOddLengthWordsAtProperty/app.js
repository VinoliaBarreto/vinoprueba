// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
  var oddArr = [];

    if (Array.isArray( obj[key] ) === false) {
        return oddArr;
    }
    for (var i in obj[key]) {
        if (obj[key][i].length % 2 !=0) {
            oddArr.push(obj[key][i]);
        }
  }
        return oddArr;
}

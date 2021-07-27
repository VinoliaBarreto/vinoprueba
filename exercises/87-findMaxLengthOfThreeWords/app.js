// Write your function here
function findMaxLengthOfThreeWords (word1, word2, word3){

    var average = (word1.length + word2.length + word3.length) / 3;

        if (word1.length > average) {
            return word1.length;
        } else if (word2.length > average) {
            return word2.length;
        } else {
            return word3.length;
        }
}
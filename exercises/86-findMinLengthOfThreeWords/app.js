// Write your function here
function findMinLengthOfThreeWords (word1, word2, word3){
    var aux= 0;
    if (word1.length < word2.length){
        aux = word1.length;
    }
        else if (word1.length > word2.length) {
            aux = word2.length;
            }
            else if (aux > word3.length) {
                    aux = word3.length;
                    }
    return aux;
}
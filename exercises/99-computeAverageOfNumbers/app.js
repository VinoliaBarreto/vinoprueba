// Write your function here
function computeAverageOfNumbers(numbers) {
  var sum = 0;
  var avg = 0;

        if (numbers.length < 1) {
            return 0;
        }
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        avg = sum / numbers.length;
        return avg;
}

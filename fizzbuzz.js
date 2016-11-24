function fizzBuzz(countTo) {
    //count
    for (var counter = 1; counter <= countTo; counter++) {
        var output = counter;
        if (counter % 3 == 0) {
            output = "fizz";
        }
        if (counter % 5 == 0) {
            output = "buzz";
        }
        if ((counter % 3 == 0) && (counter % 5 == 0)) {
            output = "fizzbuzz"
        }
    }
    console.log(output);

}

fizzBuzz(16)




/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests
(function testFizzBuzz() {
    // we'll use the variables in our test cases
    var countTo = 16;
    var expected = [
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
        'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
    ];

    var actual = fizzBuzz(countTo) || [];

    if (
        expected.length === actual.length &&
        expected.every(function (item, index) {
            return actual[index] === item;
        })) {

        console.log('SUCCESS: fizzBuzz is working');
    } else {
        console.log('FAILURE: fizzBuzz is not working');
    }
})();

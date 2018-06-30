//FixBUZZ

function FixBuzz() {    //calling a function with no parameters in is 
    var count = 0;
    while (count < 200) {
        if (count % 3) {      //first conditional statement if it is devisable by three, print fizz
            console.log('fizz')
        } else if (count % 5) {  //if it is devisable by 5, print buzz
            console.log('buzz')
        } else if (count % 15) {  //if it is devisable by both, print fizzBuzz
            console.log('fizzBuzz')
        } else {
            console.log(count)
        }
        count++  //increases count by one each time this code is iterated 
        //this runs in a loop
    }
}

console.log(FixBuzz());

//this is not iterating right now 
// Creating for loops in Javascipt
//we can use this syntax to create a for loop . 

function sum(nums) {
    var total = 0;

    for (var i = 0; i < nums.length; i = i + 1) {
        total = total + nums[i];
    }
    return total;
}

sum([2, 5, 8, 12]);


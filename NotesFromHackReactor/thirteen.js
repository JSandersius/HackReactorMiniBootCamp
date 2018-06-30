//Key Value Pairs

var dirtyObject = {
    _fht: 192492,
    name: "Allyssa P. Hacker",
    age: 26,
    _byz: 939205,
    _ttrs: 510852
}
function clean(obj) {
    var cleanObj = {};
    for (key in obj) {
        //checking for key that we want to assign to cleanObj 

        if (key === 'name' || key === 'age') {
            cleanObj[key] = obj[key]
        }
    }

    return cleanObj;
}

clean(dirtyObject)


//This works


//_________________
//Key Value Pairs

var dirtyObject = {
    _fht: 192492,
    name: "Allyssa P. Hacker",
    age: 26,
    _byz: 939205,
    _ttrs: 510852
}
function clean(obj) {
    var cleanObj = {};
    for (key in obj) {
        //checking for key that we want to assign to cleanObj 

        if (key === 'name' || key === 'age') {
            cleanObj[key] = obj[key]
        }
    }

    return cleanObj;
}

clean(dirtyObject)


//This works

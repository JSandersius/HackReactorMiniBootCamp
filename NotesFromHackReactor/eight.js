//Objects 

var FirstName = 'Joch';
var LastName = 'Smith';
var email = "jochSmith@gmail.com";
var city = 'city';
var Phone = '602-332-8822';
var instrument = 'saxaphone';


///__ this is an object    --> key value pairs !
var user = {
    firstName: 'Josh',
    lastName: 'Lehman',
    email: 'jl@me.com',
    city: 'Oakland, CA',
    favColor: 'green',
    instrument: 'Saxaphone'
}

//using objects in JS --> dot notation, bracket notation --> 
//bracket notation resembles the way in shich we access elements in an array 
//Dot notation provides a sloghtly shirter way to access the same properties on an object 

// we can use both bracket and dot notarion to access properties of an objects


var dog = {
    name: 'Scooby Doo',
    age: 7,
    breed: "Great Dane"
};

dog.name; //
dog['breed'];

var someProperty = 'age';
dog[someProperty]; //-> 7 

dog.someProperty // => ?? 

//using variables to get properties of an object only works in brakcet notation

//iterating over objects

var puppy - {
    name: 'Gatsby',
    age: 1,
    breed: "Corgi"
};

var puppyValues = [];

for (var key in puppy) {
    puppyValues.push(puppy[key]);
}

puppyValues; // => ['Gatsby', 1, 'Corgi] 
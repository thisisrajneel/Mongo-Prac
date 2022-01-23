// Using Mongoose
const mongoose = require('mongoose')

// make connection
mongoose.connect('mongodb://localhost:27017/fruitsDB')

// defining a schema
const fruitSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: [true, 'Name of the fruit is required!']
    // },
    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

// creating a model
const Fruits = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruits({
    rating: 4,
    review: 'Docs stay away!'
})

//fruit.save()

// practice
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: "John",
    age: 37
})

const mango = {
    name: 'Mango',
    rating: 5,
    review: 'Amazing'
}

const orange = {
    name: 'Orange',
    rating: 3,
    review: 'Okay'
}

const litchi = {
    name: 'Litchi',
    rating: 4,
    review: 'Nice but seasonal'
}

const arr = [mango, orange, litchi]

// Fruits.insertMany(arr, err => {console.log(err);})

Fruits.updateOne({__id: "61ed37880da8d69502dd9050"}, {name: 'Peach'}, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Updated successfully!');
    }
})

// Fruits.find((err, fruits) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         fruits.map(f => console.log(f));
//     }
// })
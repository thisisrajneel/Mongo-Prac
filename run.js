// Using Mongoose
const mongoose = require('mongoose')

// make connection
mongoose.connect('mongodb://localhost:27017/fruitsDB')

// defining a schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

// creating a model
const Fruits = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruits({
    name: 'Apple',
    rating: 4,
    review: 'Docs stay away!'
})

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

Fruits.insertMany(arr, err => {console.log(err);})
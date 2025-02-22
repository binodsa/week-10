const mongoose = require('mongoose');

// Define the schema
const BookSchema = new mongoose.Schema({
    booktitle: { type: String, required: true },
    PubYear: Number,
    author: String,
    Topic: String,
    format: String
});

// Create and export the model
module.exports = mongoose.model('bookmodel', BookSchema, 'BookCollection');

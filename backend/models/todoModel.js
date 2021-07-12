const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  value: {
    type: String,
    unique: true,
    required: [true, 'Please enter your tasks']
  },
  id: {
    type: Number,
    required: [true, 'Please enter your id']
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

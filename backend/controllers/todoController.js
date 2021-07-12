const Todo = require('../models/todoModel');

exports.addTodo = async (req, res, next) => {
  console.log('req.body', req.body);
  const todos = await Todo.create(req.body);
  console.log('create todos', todos);
  res.status(200).json({
    status: 'created todos in mongoDB success',
    todos
  });
};

exports.fetchTodo = async (req, res, next) => {
  console.log('req.body', req.body);
  const todos = await Todo.find();
  console.log('fetch todos', todos);
  res.status(200).json({
    status: 'fetch todos from mongoDB success',
    todos
  });
};

exports.deleteTodo = async (req, res, next) => {
  console.log('req.body', req.body);
  console.log('req.params', req.params);
  const { uniqueMongoId } = req.params;
  const deleteResult = await Todo.findByIdAndDelete(uniqueMongoId);
  console.log('deleteResult', deleteResult);
  // const todos = await Todo.find();
  // console.log('fetch todos', todos);
  res.status(200).json({
    status: 'delete todos from mongoDB success'
  });
};

exports.editTodo = async (req, res, next) => {
  console.log('req.body', req.body);
  console.log('req.params', req.params);
  const { uniqueMongoId } = req.params;
  const editResult = await Todo.findByIdAndUpdate(uniqueMongoId, req.body, {
    new: true,
    runValidators: true
  });
  console.log('ここまで処理が来ています');
  console.log('editResult', editResult);
  res.status(200).json({
    status: 'edit todos in mongoDB success',
    editResult
  });
};

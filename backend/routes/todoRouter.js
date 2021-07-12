const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.route('/create-todo').post(todoController.addTodo);

router.route('/fetch-todo').get(todoController.fetchTodo);

router.route('/delete-todo/:uniqueMongoId').delete(todoController.deleteTodo);

router.route('/edit-todo/:uniqueMongoId').patch(todoController.editTodo);

module.exports = router;

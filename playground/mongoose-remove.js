const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a2a6d422b8103f33295f78a'}).then((todo) => {
	
// });
Todo.findByIdAndRemove('5a2a6d422b8103f33295f78a').then((todo) => {
	console.log(todo);
});

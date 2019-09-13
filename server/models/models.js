const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_api', {useNewUrlParser: true});

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minLength: 1},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
    }, {timestamps: true})

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;

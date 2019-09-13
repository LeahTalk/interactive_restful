const Task = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_task: function(req, res) {
        const task = new Task();
        task.title = req.params.title;
        task.save()
            .then(newUserData => {
                res.redirect('/');
            })
            .catch(err => {
                res.json(err);
            })
    },

    remove_task : function(req, res) {
        Task.remove({'_id' : req.params.id})
            .then(data => res.redirect("/"))
            .catch(err => res.json(err));
    },

    get_task: function(req, res) {
        Task.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update_task : function(req, res) {
        Task.findOneAndUpdate({"_id": req.params.id}, {$set: {
            title: req.params.title,
            description: req.params.description,
            completed: req.params.completed
        }},{runValidators: true})

        .then(data => res.redirect("/"))
        .catch(err => {
            res.json(err);
        });  
    }
}
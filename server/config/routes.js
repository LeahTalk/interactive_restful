const controller = require('../controllers/controller.js');

module.exports = function(app) {
    app.get('/tasks', (req, res) => {
        controller.index(req, res);
    });

    app.get('/new/:title', (req, res) => {
        controller.add_task(req, res);
    });

    app.get('/remove/:id', (req, res) => {
        controller.remove_task(req, res);
    });

    app.get('/get/:id', (req, res) => {
        controller.get_task(req, res);
    });

    app.get('/update/:id/:title/:description/:completed', (req, res) => {
        controller.update_task(req, res);
    });
}
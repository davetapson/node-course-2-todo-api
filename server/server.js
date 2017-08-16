const express = require('express');
const bodyParser = require('body-parser');
const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./db/mongoose');
const {
    Todo
} = require('./models/todo');
const {
    User
} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    var todo = new Todo({
        text: request.body.text
    });

    todo.save().then((doc) => {
        response.send(doc);
    }, (e) => {
        response
            .status(400)
            .send(e);
    });
});

app.get('/todos', (request, response) => {
    Todo.find().then((todos) => {
        response.send({
            todos
        });
    }, (e) => {
        response
            .status(400)
            .send(e);
    });
});

// GET /todos/1234
app.get('/todos/:id', (request, response) => {
    var id = request.params.id;

    if (!ObjectID.isValid(id)) {
        return response
            .status(404)
            .send(); //`User with Id: ${id} is invalid`);
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return response
                .status(404)
                .send(); //`User with Id: ${id} not found`);
        }
        response
            .status(200)
            .send({
                todo
            });

    }).catch((e) => {
        response
            .status(400)
            .send();
    });
});

app.delete('/todos/:id', (request, response) => {
    var id = request.params.id;

    if (!ObjectID.isValid(id)) {
        return response
            .status(404)
            .send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return reponse
                .status(404)
                .send();
        }

        response.send(todo);

    }).catch((e) => {
        response
            .status(404)
            .send();
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};
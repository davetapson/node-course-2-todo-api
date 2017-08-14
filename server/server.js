const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');

const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

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
        response.send({ todos });
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
            .send();//`User with Id: ${id} is invalid`);
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return response
                .status(404)
                .send();//`User with Id: ${id} not found`);
        }
        response
            .status(200)
            .send({todo});

    }).catch((e) => {
        response
            .status(400)
            .send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };
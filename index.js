const express = require('express');

const app = express();

const port = 5000;

app.listen(port, ()=> {
    console.log('Server started');
})

let users = [
    {id: 1, name: 'Artyom', email: 'SemperIdem1989@gmail.com', age: 34,},
    {id: 2, name: 'Tom', email: 'TomHardy@gmail.com', age: 46,},
]

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(user);
    }
});

app.get('/users/age/:age', (req, res) => {
    const { age } = req.params;
    const filteredUsers = users.filter(user => user.age > parseInt(age));
    res.json(filteredUsers);
});

app.get('/users/domain/:domain', (req, res) => {
    const domain = req.params.domain;
    const filteredUsers = users.filter(user => user.email.includes(domain));

    if (filteredUsers.length === 0) {
        res.status(404).json({ message: 'users with domain not found' });
    } else {
        res.json(filteredUsers);
    }
});

app.get('/users/sorted', (req, res) => {
    const sortedUsers = users.slice().sort((a, b) => a.name.localeCompare(b.name)); 
    res.json(sortedUsers);
});

app.post('/users', (req, res) => {
    const { id, name, email, age } = req.body;
    if (!id || !name || !email || !age) {
        res.status(400).json({ message: 'Please provide id, name, email, and age' });
    } else {
        const newUser = { id, name, email, age };
        users.push(newUser);
        res.status(201).json(newUser);
    }
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(user => user.id !== parseInt(req.params.id));
    res.status(204).json({ message: 'User deleted' });
});


const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');

app.get('/api/users', (req, res) => {
    return res.json(users);
})

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
        </ul>
    `;
    return res.send(html);
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id);
    return res.json(user);
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id);
    return res.json(user);
})
    .post((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id == id);
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        return res.json(user);
    })
    .put((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id == id);
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id == id);
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        return res.json(user);
    }).delete((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id == id);
        users.splice(users.indexOf(user), 1);
        return res.json(user);
    })

app.listen(5000, () => console.log("Server running on port 5000"));
const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

let userExist = {
    username: 'Vova',
    pass: '159753'
};

App.post('/api/user', (req, res) => {
    console.log(req.body);
    console.log('Registration was successfully');

    return res.json()
});

App.post('/api/auth', (req, res) => {
    const username = req.body.login;
    const pass = req.body.pass;

    if(userExist.username === username && userExist.pass === pass) {
        return res.json({check: true})
    }
    else {
        return res.json({check: false})
    }
});

App.listen(4000, () => {
    console.log("Server shutdown");
});
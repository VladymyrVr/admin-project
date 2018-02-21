const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

let userExist = [{username: 'Vova', pass: '159753'}];



App.post('/api/user/register', (req, res) => {
    userExist.push({username: req.body.username, pass: req.body.password})
    console.log('Registration was successfully');
    console.log(userExist);
    return res.json()
});

App.post('/api/auth', (req, res) => {
    const user = req.body.login;
    const password = req.body.pass;

    let userCheck = userExist.filter((item) => {
       return (item.username === user && item.pass === password)
    });

    if(userCheck[0] !== undefined) {
        console.log('true');
        return res.json({
            check: true,
            username: userCheck[0].username
        })
    }
    else {
        console.log(' userCheck false');
        return res.json({check: false})
    }
});

App.listen(4000, () => {
    console.log("Server shutdown");
});
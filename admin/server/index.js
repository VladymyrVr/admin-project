const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

let userExist = [{username: 'Vova', pass: '159753'}];

let SalesLastYear = [
    {
        category: 'Websites',
        value: 220
    },
    {
        category: 'Logo',
        value: 125
    },
    {
        category: 'Social Media',
        value: 285
    },
    {
        category: 'Adwords',
        value: 69
    },
    {
        category: 'E-Commerce',
        value: 185
    }
];

let SalesLastMonth = [
    {
        category: 'Websites',
        value: 65
    },
    {
        category: 'Logo',
        value: 21
    },
    {
        category: 'Social Media',
        value: 75
    },
    {
        category: 'Adwords',
        value: 17
    },
    {
        category: 'E-Commerce',
        value: 24
    }
];

let SalesLastWeek = [
    {
        category: 'Websites',
        value: 7
    },
    {
        category: 'Logo',
        value: 4
    },
    {
        category: 'Social Media',
        value: 23
    },
    {
        category: 'Adwords',
        value: 3
    },
    {
        category: 'E-Commerce',
        value: 6
    }
];


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

    if (userCheck[0] !== undefined) {
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

App.get('/api/sales/last-year', (req, res) => {
    const lastYear = SalesLastYear;
    return res.json({
        lastYear
    })
});

App.get('/api/sales/last-month', (req, res) => {
    const lastMonth = SalesLastMonth;
    return res.json({
        lastYear
    })
});

App.get('/api/sales/last-week', (req, res) => {
    const lastWeek = SalesLastWeek;
    return res.json({
        lastWeek
    })
});

App.listen(4000, () => {
    console.log("Server shutdown");
});
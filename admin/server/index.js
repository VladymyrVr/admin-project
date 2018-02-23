const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());


let userExist = [{username: 'Vova', pass: '159753'}];


let SalesLastYear = [
    ["Websites",220],["Logo", 125],["Social Media",285],["Adwords", 69], ["E-Commerce", 185]];


let SalesLastMonth = [
    ["Social Media",75],["Websites",65],["E-Commerce", 24],["Logo", 21], ["Adwords", 17]];


let SalesLastWeek = [
    ["Websites",7],["Social Media",6],["E-Commerce", 5],["Logo", 4], ["Adwords", 3]];


let ReportSalesLastYear = [ 310.0, 325.0, 300.0, 220.0, 300.2, 400.0, 375.2, 698, 405, 430, 265, 330, 245];


let ReportSalesLastMonth = [ 24.0, 32.0, 30.0, 39.0, 18, 40.0, 37.2, 32, 40, 43, 26, 33, 36 ];


let ReportSalesLastWeek = [12.0, 4, 6.5, 12, 7.25, 8.5, 7.85, 3, 8, 8.6, 12, 8, 6];


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
    return res.json(
        SalesLastYear
    )
});

App.get('/api/sales/last-month', (req, res) => {
    return res.json(
        SalesLastMonth
    )
});

App.get('/api/sales/last-week', (req, res) => {
    return res.json(
        SalesLastWeek
    )
});

App.get('/api/report/last-year', (req, res) => {
    return res.json(
        ReportSalesLastYear
    )
});

App.get('/api/report/last-month', (req, res) => {
    return res.json(
        ReportSalesLastMonth
    )
});

App.get('/api/report/last-week', (req, res) => {
    return res.json(
        ReportSalesLastWeek
    )
});

App.listen(4000, () => {
    console.log("Server shutdown");
});
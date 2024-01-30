const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine','pug');

app.get('/', (req, res) => {
    res.render('getdata', { result: 'Hello, My Server!' })
});

// 輸入 bar 連結會跑的
app.get('/getData', (req, res) => {
    if (!req.query.number) {
        res.render('getdata', { result: 'Lack of Parameter' });
    } else if (isNaN(req.query.number) || req.query.number <= 0) {
        res.render('getdata', { result: 'Wrong Parameter' });
    } else {
        const number = parseInt(req.query.number);
        const result = total(number);
        res.render('getdata', { result: `Result: ${result}` });
    }
});

// 在 sum.html 欄位輸入會跑的
app.get('/getdatas', (req, res) => {
    if (!req.query.number) {
        res.send({ result: 'Lack of Parameter' });
    } else if (isNaN(req.query.number) || req.query.number <= 0) {
        res.send({ result: 'Wrong Parameter' });
    } else {
        const number = parseInt(req.query.number);
        const result = total(number);
        res.send({ result: `${result}` });
    }
});

// 數字計算
function total(i) {
    return (i * (i + 1)) / 2;
}

app.listen(3000,()=>{
    console.log('The application is running on localhost:3000!')
}); 
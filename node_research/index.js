const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engin', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('landing.ejs')
})

app.get('/myresearch', (req, res) => {
    res.render('index.ejs')
})

app.get('/.well-known/pki-validation/', (req, res) => {
    res.sendFile('D194E06FA187FE2495C7AFEAD09E9A0E.txt')
})

app.listen(80)
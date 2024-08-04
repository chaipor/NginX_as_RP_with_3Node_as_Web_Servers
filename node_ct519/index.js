const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engin', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('landing.ejs')
})

app.get('/ct519', (req, res) => {
    res.render('index.ejs')
})

app.listen(80)
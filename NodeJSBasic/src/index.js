const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const port = 4000

// scss 
app.use(express.static(path.join(__dirname,'public')))

// library  body-parser 
app.use(express.urlencoded({extended:true})) // methor POST to form // gửi dữ liệu từ form của người dùng lên server bằng phương thức POST
app.use(express.json())       // methor POST to javacript //  gửi dữ liệu lên server bằng phương thức POST thông qua javacript

//HTTP logger
// app.use(morgan('combined'))

app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'))

app.get('/', (req, res) => {

    res.render('home');
})
app.get('/news', (req, res) => {
    res.render('news');
})
app.get('/products', (req, res) => {
  res.render('products');
})
app.get('/search', (req, res) => {
  // console.log(req.query.q)
  res.render('search');
})

app.post('/search', (req, res) => {

  console.log(req.body)
  res.render('search');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
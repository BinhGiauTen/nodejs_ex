const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars'); // Import express-handlebars

const morgan = require('morgan');
const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'));

// Configure Handlebars as the view engine
app.engine('hbs', exphbs({extname: '.hbs'})); // Use exphbs() to configure Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Sử dụng path.join để chỉ định đường dẫn tới thư mục views

// Other middleware and routes

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});

app.get('/search', function (req, res) {
  res.render('search');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

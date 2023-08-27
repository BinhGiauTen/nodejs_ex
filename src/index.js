const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars'); // Import express-handlebars

const morgan = require('morgan');
const app = express();

const route = require('./routes');

const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname,'public')))

// Middleware để phân tích dữ liệu từ yêu cầu POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('combined'));

// Configure Handlebars as the view engine
app.engine('hbs', exphbs({extname: '.hbs'})); // Use exphbs() to configure Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Sử dụng path.join để chỉ định đường dẫn tới thư mục views

// Other middleware and routes

route(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

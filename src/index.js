// 1. Import thư viện ngoài
const path = require('path'); 
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

// 2. Import module nội bộ
const route = require('./router');
const db = require('./config/db');

// 3. Khởi tạo app
const app = express();
const port = 3000;

// 4. Middleware
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// 5. Cấu hình template engine
app.engine('hbs', engine({
    layoutsDir: path.join(__dirname, 'resource/views/layouts'),
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// 6. Kết nối database
// (Nên kết nối DB trước khi nhận request)
db.connect();

// 7. Định nghĩa route
route(app);

// 8. Khởi động server
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});

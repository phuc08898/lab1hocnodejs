const path = require('path'); 
const express = require('express');
// này là đường dẫn thư viện express tự load lại 
const morgran = require('morgan');
// templeat engine
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public'))); 
app.engine('hbs', engine({
    layoutsDir: path.join(__dirname, 'resouce/views/layouts'),
    defaultLayout: 'main',
    // định nghĩa  đuôi file
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resouce/views'));
// console.log(path.join(__dirname,'resouce/views'))

app.get('/', (req, res) => {
   res.render('home');
});
app.listen(port,()=>{
    return console.log(`Example app listening on port http://localhost:${port}`);
})

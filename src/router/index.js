const express = require('express');
const newRouter = require('./new');
const homeRouter = require('./home');
function route(app){
    app.use('/new', newRouter);
    app.use('/', homeRouter);
}
module.exports = route;
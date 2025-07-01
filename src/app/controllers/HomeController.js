const Courses = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');

class HomeController {
    //[GET] /
    index(req, res, next) {
       Courses.find({})
        .then(courses => {
            // courses = courses.map(course => course.toObject())
            res.render('home',{
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(err => next(err));
    }
}
module.exports = new HomeController();
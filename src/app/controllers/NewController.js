class NewController {
    //[GET] /news
  index(req, res) {
    res.render('new');
  }
}
module.exports = new NewController();
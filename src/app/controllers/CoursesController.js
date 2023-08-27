const {
  mulipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
const Course = require("../models/Course");

class CoursesController {
  //[GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //[GET /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST /courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    const name = req.body.name;
    const description = req.body.description;
    const videoid = req.body.videoid;
    course.save()
        .then(()=>res.redirect('/'))
        .catch(error =>{
            
        })
  }
}

module.exports = new CoursesController();

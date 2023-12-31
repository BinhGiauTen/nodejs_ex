
const { mulipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class SiteController {

    //[GET] /
    async index(req,res,next){

        try {
            let courses = await Course.find({});
            
            res.render('home',{courses :mulipleMongooseToObject(courses)});
        } catch (error) {
            next(error);
        }
        
    }

    //[GET /search
    search(req,res) {
        res.render('search');
    }
}

module.exports = new SiteController;
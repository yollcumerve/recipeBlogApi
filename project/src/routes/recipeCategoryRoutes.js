const Router = require('express').Router()
const categoryService = require('../service/recipeCategoryService')

//Homepage
Router.get('/', categoryService.homePage)

//Create recipe categories
Router.post('/create/category', categoryService.create)

//Explore categories
Router.get('/categories', categoryService.exploreCategories)


//Find one of category
Router.get('/one/category/:name', categoryService.one)

//Find one of category by ıd 
Router.get('/one/category/:id', categoryService.oneCategoryById)


module.exports = Router
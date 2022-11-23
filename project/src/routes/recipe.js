const Router = require('express').Router()
const recipeModel = require('../model/recipeModel')
const recipeService = require('../service/recipeService')

//Create a recipe
Router.post('/create/recipe', recipeService.create)

//Find by category
Router.get('/findby/category/:category', recipeService.findByCategory)

//find recipe by id 
Router.get('/find/recipe/:id', recipeService.recipeById)

//find recipe by searchTerm
Router.get('/recipe/search', recipeService.recipeSearch)

//expolore-latest recipe
Router.get('/explore/latest/recipe', recipeService.latestRecipe)

//explore random recipe
Router.get('/recipe/random', recipeService.randomRecipe)

//submit recipe
Router.get('/submit/recipe', recipeService.submitRecipe)

//submit recipe 
Router.post('/submit/recipe/post', recipeService.submitRecipeOnPost)

//update recipe 
Router.put('/update/recipe/:id', recipeService.update)



module.exports = Router
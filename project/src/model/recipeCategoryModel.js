const mongoose = require('mongoose')
const dbConnect = require('../modules/dbConnection')
const RecipeCategorySchema = new mongoose.Schema({
   name: {
    type: String,
    required: 'This field is required.'
   },
   image: {
    type: String,
    required: 'This field is required.'
   }
    
})

module.exports = mongoose.model('RecipeCategory',RecipeCategorySchema)
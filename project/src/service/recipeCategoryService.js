const categoryModel = require('../model/recipeCategoryModel')
const recipeModel = require('../model/recipeModel')

exports.homePage = async (req,res) => {
   try {
      const limitNumber = 5;
      const categories = await categoryModel.find({})
      .limit(limitNumber)
      const latest = await recipeModel.find({})
      .sort({$natural: -1})
      .limit(limitNumber)
   
      res.status(200).send(categories)
   } catch (e) {
      console.log(e);
      res.status(400).send(e)
   }
}

exports.create = async (req,res) => {
   try {
      const created = await categoryModel.create(req.body)
      res.status(200).send(created)
   } catch (e) {
      console.log(e)
      res.status(400).send(e)
      
   }
}

exports.exploreCategories = async (req,res) => {
   try {
      const limitNumber = 20;
      const categories = await categoryModel.find({})
      .limit(limitNumber)
      res.status(200).send(categories)
   } catch (e) {
      console.log(e)
      res.status(400).send(e)
   }
}

exports.one = async (req,res) => {
   try {
      const one = await categoryModel.findOne({name: req.params.name})
      res.status(200).send(one)
   } catch (e) {
      console.log(e)
      res.status(400).send(e)
   }
  
}

exports.oneCategoryById = async (req,res) => {
   try {
      const findedById = await categoryModel.findById({_id: req.params.id})
      res.status(200).send(findedById)
   } catch (e) {
      console.log(e)
      res.status(400).send(e)
   }
}
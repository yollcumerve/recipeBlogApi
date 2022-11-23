const recipeModel = require("../model/recipeModel");

exports.create = async (req, res) => {
  try {
    const created = await recipeModel.create(req.body);
    res.status(200).send(created);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

exports.findByCategory = async (req, res) => {
  try {
    const finded = await recipeModel
      .find({ category: req.params.category })
      .sort({ $natural: -1 });
    res.status(200).send(finded);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

exports.recipeById = async (req, res) => {
  try {
    const one = await recipeModel.findById({ _id: req.params.id });
    res.status(200).send(one);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

exports.recipeSearch = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipe = await recipeModel.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.status(200).send(recipe);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

exports.latestRecipe = async (req, res) => {
  try {
    const limitNumber = 20;
    const recipe = await recipeModel
      .find({}.sort({ _id: -1 }))
      .limit(limitNumber);
    res.status(200).send(recipe);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

exports.randomRecipe = async (req, res) => {
  try {
    let count = await recipeModel.find({}).countDocuments();
    let random = Math.floor(Math.random() * count);
    let recipe = await recipeModel.findOne().skip(random).exec();
    res.status(200).send(recipe);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

exports.submitRecipe = async (req, res) => {
  //FLASH MESSAGES
  const infoErrorObj = req.flash("infoErrors");
  const infoSubmitObj = req.flash("infoSubmit");
  res.render("/");
};

exports.submitRecipeOnPost = async (req, res) => {
  try {
    
    let imageFileUpload;
    let uploadPath;
    let newImageName;
    if(!req.files || Object.keys(req.files).length === 0){
        console.log('No files where uploaded')
    }else{
        imageUploadFile = req.files.image;
        newImageName = Date.now() + imageFileUpload.name;
        uploadPath = require('path').resolve('./') + '/public/uploads' + newImageName;

        imageFileUpload.mv(uploadPath, function(error){
            if(err){
                res.status(400).send(err)
            }
        })
    }
    const newRecipe = recipeModel.create({
        name: req.body.name,
        description: req.body.description,
        email: req.body.email,
        ingredients: req.body.ingredients,
        category: req.body.category,
        image: newImageName
    });
    req.flash("infoSubmit", "Recipe has been added.");
    res.render("/");
    res.status(200).send(newRecipe)
  } catch (e) {
    req.flash('infoErrors',error)
    console.log(e);
    res.status(400).send(e);
  }

};

exports.update = async (req,res) => {
    try {
        const updated = await recipeModel.findByIdAndUpdate({_id: req.params.id})
        res.status(200).send(updated)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}


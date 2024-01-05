var express = require("express");
var router = express.Router();

const Recipe = require("../models/Recipe");  //faltaba

//Iteration 3 - Create a recipe
router.post("/", (req, res, next) => {
  Recipe.create(req.body)
    .then((createdRecipe) => {
      console.log("Recipe created ->", createdRecipe);
      res.status(201).send(createdRecipe); //res.json(createdRecipe)--> podria ir aqui....pero coloque res.status
    })
    .catch((error) => {
      console.error("Error while creating a new recipe ->", error);
      res.status(500).send({ error: "Error while creating a new recipe"}); //res.json(error)--> podria ir aqui....pero coloque res.status
    });
});

//Iteration 4 - Get ALL recipes
router.get("/", (req, res, next) => {
  console.log("Hitting get route");
  Recipe.find()
    .then((foundRecipes) => {
      console.log(foundRecipes);
      res.status(201).send(foundRecipes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});


//Iteration 5 - Get a single recipe
    //Para este usar findById pero como lo hicimos juntos no es necesario (**no usa req.body)

//Iteration 6 - Update a single recipe
router.post("/update/:id", (req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new es optional
    .then((updatedRecipe) => {
      console.log(updatedRecipe);
      res.status(200).send(updatedRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});


//Iteration 7 - Delete a single recipe
router.get("/delete/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((updatedRecipe) => {
      console.log(updatedRecipe);
      res.status(200).send(updatedRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;

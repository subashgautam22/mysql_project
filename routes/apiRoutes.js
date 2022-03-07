const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/all", (req, res) => {
  db.Todo.findAll().then(todos => res.send(todos));

});

// get single todo by id
router.get("/find/:id", async (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id
    }
  }).then(todos => res.send(todos));
});

// post new todo
router.post("/news", (req, res) => {
  db.Todo.create({
    text: req.body.text
  }).then(Todos => res.send(Todos));
});


// delete todo
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("success"));
});

// edit a todo
router.put("/edit", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text
    },
    {
      where: { id: req.body.id }
    }
  ).then(() => res.send("success"));
});

module.exports = router;

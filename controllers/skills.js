const Skills = require("../models/skills");

module.exports = {
  show,
  index,
};

function show(req, res) {
  res.render("skills/show", {
    skill: Skills.getOne(req.params.id),
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skills.getAll(),
  });
}

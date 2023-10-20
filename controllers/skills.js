const Skill = require("../models/skills");

module.exports = {
  show,
  index,
  create,
  add,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect("/skills");
}

function add(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    title: "Skill Details",
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

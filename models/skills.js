const skills = [
  { id: 1, name: "HTML", level: "easy", understood: true },
  { id: 2, name: "CSS", level: "medium", understood: true },
  { id: 3, name: "Javascript", level: "hard", understood: false },
];

module.exports = {
  getOne,
  getAll,
  create,
  // deleteOne,
  update,
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find((skill) => skill.id === id);
  Object.assign(skill, updatedSkill);
}

// function deleteOne(id) {
//   id = parseInt(id);
//   const idx = skills.findIndex((skill) => skill.id === id);
//   skills.splice(idx, 1);
// }

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.understood = "yes";
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skills) => skills.id === id);
}

function getAll() {
  return skills;
}

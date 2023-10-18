const skills = [
  { id: 1, name: "HTML", level: "easy", understood: "yes" },
  { id: 2, name: "CSS", level: "medium", understood: "yes" },
  { id: 3, name: "Javascript", level: "hard", understood: "kinda" },
];

module.exports = {
  getOne,
  getAll,
};

function getOne(id) {
  id = parseInt(id);
  return skills.find((skills) => skills.id === id);
}

function getAll() {
  return skills;
}

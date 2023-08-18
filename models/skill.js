const skills = [
    {id: 12345, skill: 'javascript', level: 'entry'},
    {id: 56789, skill: 'HTML', level: 'intermediate'},
    {id: 90123, skill: 'CSS', level: 'expert'}
]

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    console.log(idx, id)
    updatedSkill.id = id
    skills.splice(idx, 1, updatedSkill)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

const skills = [
    {id: 12345, skill: 'javascript', level: 'entry'},
    {id: 56789, skill: 'HTML', level: 'intermediate'},
    {id: 90123, skill: 'CSS', level: 'expert'}
]

module.exports = {
    getAll,
    getOne,
    create
}

function create(skill) {
    skill.id = Date.now() * 1000000;
    skill.level = 'beginner';
    skills.push(skill);
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

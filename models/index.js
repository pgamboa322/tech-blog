const User = require('./User');
const Blog = require('./Blog');

// relation of blog to user

Blog.hasMany(Blog, {
foreignKey: 'posts_id',
})

module.exports = { User, Blog };
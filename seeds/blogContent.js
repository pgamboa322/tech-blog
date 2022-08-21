const { Blog } = require('../models');

const blogContent = [
    {
    title: "Trying to run a 5k",
    author: "Otis",
    content: "I've been training for about 5 days!"
    },
    {    
    title: "I Like Golf!",
    author: "Owen",
    content:" I like golf, though I suck at it."
    },
    {
    title: "OnCloud vs. Hoka",
    author: "Simon",
    content: "I really believe in OnClouds, I think they're great."
    }
];

const seedBlog = () => Blog.bulkCreate(blogContent);

module.exports = seedBlog;
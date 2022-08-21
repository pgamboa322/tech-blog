const router = require('express').Router();
const Blog = require('../../models/Blog');

// POST route to create a new Blog Post using async/await
router.post('/', async (req, res) => {
  try { 
    const blogContent = await Blog.create({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  });
  // Once the post is successfully posted, the new response will added in as JSON
  res.status(200).json(blogContent)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
const router = require('express').Router();
const { Blog } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlog = await Blog.findAll({
      include: [
        {
          model: Blog,
          attributes: ['title', 'author','content'],
        },
      ],
    });
    console.log(dbBlog)
    const posts = dbBlog.map((post) =>
        
     post.get({ plain: true })
      );
    console.log(posts);
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.post('/', withAuth, async (req,res) => {
  try {
    const NewPost = Blog.create({
      title:req.body.title,
      author:req.body.author,
      content: req.body.content
    });
    res.status(200).json(newPost);
  } catch (err){
    res.status(400).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// grabbing dashboard content from home
router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    console.log(req.session)
    try {
    res.render('dashboard');
    return;
    
  } catch (err){
    res.status(400).json(err);
  }
  }
  
  res.redirect('/');
});

module.exports = router;

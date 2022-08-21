const router = require('express').Router();

const userRoutes = require('./userRoutes');
const BlogPost = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/BlogPost', BlogPost);

module.exports = router;
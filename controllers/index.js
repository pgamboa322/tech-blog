const router = require('express').Router();

// routing to include api routes defined for post, user, and home/dsh routes. 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
const router = require('express').Router();
const UserController = require('../controllers/user.controller.js');
const config = require('../config/constants');
const userRoutes = require('./user.routes');
const indexRoutes = require('./index.routes');
const postRoutes = require('./post.routes');

router.use('/', indexRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

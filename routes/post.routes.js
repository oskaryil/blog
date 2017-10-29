const router = require('express').Router();
const constants = require('../config/constants');
const { isAdmin } = require('../utils/isAuthenticated');
const PostController = require('../controllers/post.controller');

router.route('/').post(isAdmin, PostController.createPost);

module.exports = router;

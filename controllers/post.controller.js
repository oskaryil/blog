const constants = require('../config/constants');
const Post = require('../models/post.model');

const createPost = async (req, res) => {
	try {
		const data = req.body;
		const post = Post.createPost(data, req.user._id);
		return res.status(201).send({ message: 'Post created', post });
	}	catch (err) {
		return res.status(400).send({ message: 'Failed to create post', err: err.message });	
	}
};

module.exports = {
	createPost
};

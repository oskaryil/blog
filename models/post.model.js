const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const slugify = require('../utils/slugify');

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: [3, 'Title must be longer than 3 characters'],
		trim: true
	},
	slug: {
		type: String,
		required: false,
		unique: true
	},
	body: {
		type: String,
		required: true,
		minLength: [10, 'Body must be longer than 10 characters']
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
}, { timestamps: true });

PostSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

PostSchema.statics = {
	createPost(args, authorId) {
    return this.create(Object.assign(args, { author: authorId }));
	}
};

PostSchema.methods = {
  makeSlug() {
    this.slug = slugify(this.title);
  },
};

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;

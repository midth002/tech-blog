const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post, {
    foreignKey: 'post_id',
});

Post.belongsTo(User, {
    foreignKey: 'post_id',
});



Post.hasMany(Comment, {
    foreignKey: 'post_id',
});



Comment.belongsTo(User, {
    foreignKey: 'user_id',
});



module.exports = { User, Post, Comment };
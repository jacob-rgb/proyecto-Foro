'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentSchema = schema({
    userId: String,
    postId: String,
    userName: String,
    likes: Number,
    dislikes: Number,
    email: String,
    images: Array,
    body: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('comment', commentSchema);
// projects --> guarda los documentos en la coleccion 
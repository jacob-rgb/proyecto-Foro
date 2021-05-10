'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = schema({
    userId: String,
    username: String,
    title: String,
    likes: Number,
    dislikes: Number,
    email: String,
    images: Array,
    numresp: Number,
    body: String,
    categoria: String,
    vistas: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('post', postSchema);
// projects --> guarda los documentos en la coleccion 
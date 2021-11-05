'use strict'

var Post = require('../models/PostModel');
var fs = require('fs');
var path = require('path');
const commentModel = require('../models/commentModel');
const userModel = require('../models/auth.dao');
const PostModel = require('../models/PostModel');


const controller = {

  /*
    función que se encarga de obtener todos los posts de la DB (ordenados por última modificación)
  */
    getPosts: async (req, res, next) => {
        Post.find().sort('-updatedAt').exec((err, PostsList) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!PostsList) return res.status(404).send('No hay Proyectos para mostrar');

            return res.status(200).send({posts: PostsList})
        })
    },

  /*
    función que se encarga de obtener un posts de la DB mediante el id que se obtiene de los parámetros de la request
  */

    getPostbyId: (req, res) => {
        const postId = req.params.id;

        if(postId == null) return res.status(404).send({message: 'El Post no existe'});

        Post.findById(postId, (err, post) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!post) return res.status(404).send({message: 'El Post no existe'});

            return res.status(200).send({post: post});
        });
    },

  /*
    función que se encarga de obtener todos los posts de la DB que coincidan con la categoría indicada en los parámetros de la request (ordenados por última modificación)
  */

    getPostbyCategory: (req, res) => {
        const categoria = req.params.cat;

        if(categoria == null) return res.status(404).send({message: 'no se encontraron los post'});
        Post.find({categoria: categoria}).sort("-updatedAt").exec((err, posts) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!posts) return res.status(404).send({message:'No hay Proyectos para mostrar'});

            return res.status(200).send({posts: posts});
        })
    },

  /*
    función que se encarga de obtener los posts de la DB que contengan en su título la palabra que se pasa por parámetro(ordenados por última modificación)
  */

    getPostbyWord: (req, res) => {
        const word = req.params.word;

        if(word == null) return res.status(404).send({message: 'no se encontraron los post'});
        Post.find({title: {$regex: word}}).sort("-updatedAt").exec((err, posts) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!posts) return res.status(404).send({message:'No hay Proyectos para mostrar'});

            return res.status(200).send({posts: posts});
        })
    },

  /*
    función que se encarga de obtener todos los posts de la DB que coincidan con el userId que se pasa por parámetro de la request  (ordenados por última modificación)
  */

    getPostsByUserId: async (req, res) => {
        const {id} = req.params;

        const posts = await Post.find({userId: id}).sort("-updatedAt");
        if(!posts) return res.status(401).send({msg: 'No se han encontrado posts de este usuario'});
        return res.status(200).send({posts});
    },

  /*
    función que se encarga de borrar un post existente en la DB que coincida con el id que se pasa por los parámetros de la request
  */

    deletePost: async(req, res) => {
        const {id} = req.params;

        PostModel.findByIdAndDelete(id,undefined, (err, resp) => {
            if(err) res.status(500).send({msg: 'No se ha podido borrar el post'});
            res.status(200).send({resp});
        });

        
    },

    /*
    función que se encarga de obtener todos los comments de la DB que coincidan con el postId que se pasa por los parámetros de la request (ordenados por última creación)
   */

    getComments: async (req,res,next) => {
        const postId = req.params.id;
        commentModel.find({postId: postId}).sort('+creation-date').exec((err, commentsList) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!commentsList) return res.status(404).send('No hay Proyectos para mostrar');

            return res.status(200).send({comments: commentsList})
        })
    },

  /*
    función que se encarga de borrar un posts de la DB que coincida con el id que se obtiene por parámetros de la request 
  */

    deleteComment: async (req, res) => {
        const {id} = req.params;

        commentModel.findByIdAndDelete(id,undefined, async (err, resp) => {
            if(err) res.status(500).send({msg: 'No se ha podido borrar el comentario'})
            console.log(resp);
            const idDePost = resp.postId;

            const post = await PostModel.findByIdAndUpdate(idDePost, {$inc: { numresp: -1 }},{ timestamps: false })
            console.log(post);
            res.status(200).send({resp});
        });

        
    },

  /*
    función que se encarga de sumar +1 a las vistas de un post  por cada vez que alguien visita dicho post
  */

    sumarVista: async (req,res,next) => {
        const postId = req.params.id;
        Post.findByIdAndUpdate( postId, {$inc: { vistas: 1 }},{ timestamps: false } ).exec((err, post) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!post) return res.status(404).send('No hay Proyectos para mostrar');

            return res.status(200).send({post: post})
        })
    },
    
  /*
    función que se encarga de sumar +1 a las respuestas de un post  por cada vez que alguien sube un comentario a la db;
  */

    sumarResp: async (req,res,next) => {
        const postId = req.params.id;
        Post.findByIdAndUpdate( postId, {$inc: { numresp: 1 }} ).exec((err, post) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!post) return res.status(404).send('No hay Proyectos para mostrar');

            return res.status(200).send({post: post})
        })
    },

  /*
    función que se encarga de sumar +1 a los likes de un post  por cada vez que alguien pulsa el botón de like;
  */

    sumarLikePost: async (req,res,next) => {
        const postId = req.params.id;
        Post.findByIdAndUpdate( postId, {$inc: { likes: 1 }},{ timestamps: false } ).exec(async(err, post) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!post) return res.status(404).send('No hay Proyectos para mostrar');
            console.log('hola');
            await userModel.findByIdAndUpdate(post.userId, { likes: {$push: {"likes": postId}}});
            return res.status(200).send({post: post});
        })
    },

  /*
    función que se encarga de sumar +1 a los likes de un comment  por cada vez que alguien pulsa el botón de like;
  */

    sumarLikeComment: async (req,res,next) => {
        const commentId = req.params.id;
        commentModel.findByIdAndUpdate( commentId, {$inc: { likes: 1 }},{ timestamps: false } ).exec((err, comment) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!comment) return res.status(404).send('No hay Proyectos para mostrar');

            return res.status(200).send({comment: comment})
        })
    },

  /*
    función que se encarga de sumar +1 a los dislikes de un post  por cada vez que alguien pulsa el botón de like;
  */

    sumarDisLikePost: async (req,res,next) => {
        const postId = req.params.id;
        Post.findByIdAndUpdate( postId, {$inc: { dislikes: 1 }},{ timestamps: false } ).exec((err, post) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!post) return res.status(404).send('No hay Proyectos para mostrar');

            return res.status(200).send({post: post})
        })
    },

  /*
    función que se encarga de sumar +1 a los dislikes de un comment  por cada vez que alguien pulsa el botón de like;
  */

    sumarDisLikeComment: async (req,res,next) => {
        const commentId = req.params.id;
        commentModel.findByIdAndUpdate( commentId, {$inc: { dislikes: 1 }},{ timestamps: false } ).exec((err, comment) => {
            if(err) return res.status(500).send('Error al devolver los datos');
            if(!comment) return res.status(404).send('No hay Proyectos para mostrar');

            return res.status(200).send({comment: comment})
        })
    },

  /*
    función que se encarga de crear un nuevo Post en la DB con los datos obtenidos del body de la request;
  */

    savePost: (req, res) => {
        const post = new Post();

        const params = req.body;
        
        post.userId = params.userId;
        post.username = params.username;
        post.title = params.title;
        post.likes = params.likes;
        post.dislikes = params.dislikes;
        post.email = params.email;
        post.images = params.images;
        post.numresp = 0;
        post.body = params.body;
        post.categoria = params.categoria;
        post.vistas = params.vistas;

        if( post.userId == "" ||  post.email == "" ||  post.username == "") {
            return res.status(500).send({message: 'Error al guardar el documento.'});
        }

        post.save((err, postStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
            if(!postStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto'});

            return res.status(200).send({project: postStored});
        })
    },

  /*
    función que se encarga de crear un nuevo Comentario en la DB con los datos obtenidos del body de la request;
  */

    saveComment: (req, res) => {
       
        const coment = new commentModel()

        const params = req.body;
        
        coment.userId = params.userId;
        coment.postId = params.postId;
        coment.userName = params.userName;
        coment.creationdate = params.creationdate;
        coment.lastupdate =params.lastupdate;
        coment.likes = params.likes;
        coment.dislikes = params.dislikes;
        coment.email = params.email;
        coment.images = params.images;
        coment.body = params.body;

        if( coment.userId == "" ||  coment.email == "" ||  coment.username == "") {
            return res.status(500).send({message: 'Error al guardar el documento.'});
        }

        coment.save((err, comentStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
            if(!comentStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto'});

            return res.status(200).send({comment: comentStored});
        })
    },

    

};

module.exports = controller;
'use strict'

const express = require('express');
const apiController = require('../controllers/apiControllers');
const { setUser, validateEmail, validateUsername, validarCuenta } = require('../controllers/authController');
const authController = require('../controllers/authController');
const { validarContraseña } = require('../middlewares/validar-contraseña');

// middlewares
const { validarJWT } = require('../middlewares/validar-jwt');

const router = express.Router();

// posts

router.get('/posts', apiController.getPosts);
router.get('/post/:id', apiController.getPostbyId);
router.get('/postscat/:cat', apiController.getPostbyCategory);
router.get('/postsword/:word', apiController.getPostbyWord);
router.get('/postsuserid/:id', apiController.getPostsByUserId);
router.delete('/post/:id', apiController.deletePost);
router.get('/resp/:id', apiController.sumarResp);
router.get('/vista/:id', apiController.sumarVista);
router.get('/likeP/:id/:userId', apiController.sumarLikePost);
router.get('/dislikeP/:id/:userId', apiController.sumarDisLikePost);
router.post('/save-post',[
    validarJWT
], apiController.savePost);

//comments

router.get('/comments/:id', apiController.getComments);
router.delete('/comments/:id', apiController.deleteComment);
router.get('/likeC/:id', apiController.sumarLikeComment);
router.get('/dislikeC/:id', apiController.sumarDisLikeComment);
router.post('/save-comment',[
    validarJWT
], apiController.saveComment);

  // auth

router.post('/register', authController.newUser );
router.post('/login', authController.loginUser);

router.put('/usuarios/:id', [
    validarJWT,
    validarContraseña
], authController.setUser );

router.post('/usuarios/:usuario/:id',[
    validarJWT
], authController.deleteUser);

// validations

router.get('/verificaemail/:email', validateEmail);
router.get('/verificausername/:username', validateUsername);
router.get('/validarcuenta',[
    validarJWT
], validarCuenta)



module.exports = router;
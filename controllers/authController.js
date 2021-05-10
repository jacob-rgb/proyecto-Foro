'use strict'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/auth.dao');
const SECRET_KEY = 'secretkey123456';




const controller = {

  /*
    función que se encarga de crear un  nuevo usuario en la DB con la información de la request y genera un jwt de acceso
  */
    newUser:  (req, res) => {
        const newUser = {
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            friends: req.body.friends,
            imgprofile: req.body.imgprofile,
            password: bcrypt.hashSync(req.body.password, 12,)
          }

          userModel.create(newUser, (err, user) => {
            if (err && err.code === 11000) return res.status(409).send('Email already exists');
            // if (err) return res.status(500).send('Server error');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: user.id },
              SECRET_KEY, {
                expiresIn: expiresIn
              });
            const dataUser = {
              name: user.name,
              surname: user.surname,
              username: user.username,
              friends: user.friends,
              imgprofile: user.imgprofile,
              email: user.email,
              accessToken: accessToken,
              expiresIn: expiresIn,
              id: user._id
            }
            // response 
            res.send({ dataUser });
          });
    },

    /*
       función que se encarga de loguear un  usuario existente en la DB y genera un jwt de acceso
     */

    loginUser:  (req, res) => {
        const userData = {
            username: req.body.username,
            password: req.body.password
          }
          userModel.findOne({ username: userData.username }, (err, user) => {
            if (err) return res.status(500).send('Server error!');
        
            if (!user) {
              // email does not exist
              res.status(409).send({ message: 'Something is wrong' });
            } else {
              const resultPassword = bcrypt.compareSync(userData.password, user.password);
              if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
        
                const dataUser = {
                    name: user.name,
                    surname: user.surname,
                    username: user.username,
                    imgprofile: user.imgprofile,
                    email: user.email,
                    friends: user.friends,
                    accessToken: accessToken,
                    expiresIn: expiresIn,
                    id: user._id
                }
                res.send({ dataUser });
              } else {
                // password wrong
                res.status(409).send({ message: 'Something is wrong' });
              }
            }
          });
    },

  /*
    función que se encarga de editar un usuario existente en la DB con la información de la request
  */

    setUser: async (req, res) => {
      const id = req.body.id

      const { password, password3, ...changes} = req.body.changes;
      if(changes.password2 === null) {
        changes.password2 = password
      }
      changes.password = bcrypt.hashSync(changes.password2, 12,);
      const usuario = await  userModel.findByIdAndUpdate(id, changes, {new: true});

      if(!usuario) return res.status(400).send({msg: 'Ha habido un problema de autentcacion'})

      const dataUser = {
        name: usuario.name,
        surname: usuario.surname,
        username: usuario.username,
        imgprofile: usuario.imgprofile,
        email: usuario.email,
        friends: usuario.friends,
        id: usuario._id
    }
      
      return res.status(200).send({
        dataUser
      })
    },

    /*
           función que se encarga de borrar un  usuario existente en la DB
    */
    deleteUser: async(req, res) => {
      const { id} = req.params;
      const { password } = req.body

      const usuario = await userModel.findById(id)

      const resultPassword = bcrypt.compareSync(password, usuario.password);
      
      if(!resultPassword) return res.status(200).send({msg: 'contraseña incorrecta', ok: false})

      userModel.findByIdAndDelete(id,undefined, (err, resp) => {
          if(err) res.status(500).send({msg: 'No se ha podido borrar el usuario'})
          res.status(200).send({resp});
      });

      
  },

  /*
    función que se encarga de validar si un email coincide con algún usuario de la DB
  */

  validateEmail: async (req, res) => {
    const { email } = req.params;
    const existeEmail = await userModel.find( { email } );

    if(existeEmail.length === 0) return res.status(200).send({existe: false})
    return res.status(200).send({existe: true})
  },

  /*
    función que se encarga de validar si un username coincide con algún usuario de la DB
  */

  validateUsername: async (req, res) => {
    const { username } = req.params;
    const existeUsername = await userModel.find( { username } );

    if(existeUsername.length === 0) return res.status(200).send({existe: false})
    return res.status(200).send({existe: true})
  },

  /*
    función que se encarga de validar si una cuenta tiene un token de acceso válido
  */

  validarCuenta: async(req, res) => {
    const token = req.header('x-token');
    if(token) return res.status(200).send({verificado: true});

    return res.status(400).send({verificado: false})
  }

  
};

module.exports = controller;
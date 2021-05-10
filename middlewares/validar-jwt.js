const { response } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/auth.dao');

const SECRET_KEY = 'secretkey123456';

  /*
    middleware que se encarga de validar si el token obtenido a través de los headers es un token válido de esta aplicación;
  */

const validarJWT = async (req, res = response, next) => {

    const token = req.header('x-token');

    if(!token) return res.status(401).json({
        msg: 'No hay token en la petición'
    });

    try {
        
        const { id } = jwt.verify( token, SECRET_KEY);


        const usuario = await Usuario.findById( id );

        if(!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en base de datos',
                verificado: false
            })
        }

        req.usuario = usuario;
        next()
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'token no válido',
            verificado: false
        })
    }

}

module.exports = {
    validarJWT
}
const { response } = require('express');
const bcrypt = require('bcrypt');

const Usuario = require('../models/auth.dao');

  /*
    middleware que se encarga de validar si la contraseña obtenida de los parámetros de la request coincida con la del usuario coincidente con el id aportado en los parámetros de la request;
  */
const validarContraseña = async (req, res = response, next) => {

    const { id} = req.params;

    const { password } = req.body.changes

    const usuario = await Usuario.findById(id)


    const resultPassword = bcrypt.compareSync(password, usuario.password);
    
    if(!resultPassword) return res.status(200).send({msg: 'contraseña incorrecta', ok: false})
    
    next()

}

module.exports = {
    validarContraseña
}
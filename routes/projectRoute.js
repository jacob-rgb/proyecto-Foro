'use strict'

const express = require('express');


const router = express.Router();

const multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});



module.exports = router;
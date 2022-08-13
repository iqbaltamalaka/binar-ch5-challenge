const express = require('express')
const routerAuth = express.Router()
const AuthController = require('../controllers/authen')
const authController = new AuthController()
const MiddlewareAuth = require('../middlewares/router-middleware')
const middleware = new MiddlewareAuth()

routerAuth.get('/register', middleware.isGuest, authController.register)
routerAuth.get('/login', middleware.isGuest, authController.login)

routerAuth.post('/register', authController.register)
routerAuth.post('/login', authController.login)

module.exports = routerAuth
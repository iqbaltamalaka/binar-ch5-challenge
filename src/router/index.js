const express = require('express')
const router = express.Router()
const MiddlewareAuth = require('../middlewares/router-middleware')
const middleware = new MiddlewareAuth()

// router

router.get('/game', middleware.isAuthenticated, (req, res) => {
  res.render('game')
})

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/home', (req, res) => {
  res.render('home')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/register', middleware.isAuthenticated, (req, res) => {
  res.render('login')
})

router.get('/login', middleware.isGuest, (req, res) => {
  res.redirect('register')
})

router.get('/login', middleware.isAuthenticated, (req, res) => {
  res.render('game')
})

module.exports = router

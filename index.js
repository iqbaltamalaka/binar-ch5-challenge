require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const logger = require('./src/middlewares/built-middleware')
const router = require('./src/router/index')
const routerAuth = require('./src/router/auth.js')
const session = require('express-session')
const { MemoryStore } = require('express-session')
const sessionStorage = new MemoryStore()

app.use(
  session({
    secret: 'secret',
    resave: false,
    store: sessionStorage,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 100,
    }
  })
)

app.set('view engine', 'ejs')
app.set('views')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(logger)
app.use(router)
app.use(routerAuth)


app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {},
  })
})

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})

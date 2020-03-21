const express = require('express')
const app = express()
const db = require('./config/db.js')
const consing = require('consign')

consing()
    .include('./config/passport.js')
    .then('./config/midwares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)


app.db = db

app.listen(3000, () => {
    console.log('Backend start')
})
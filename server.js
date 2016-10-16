'use strict';
const bodyParser = require('body-parser'),
        express = require('express'),
        app = express(),
        urlencodedParser = bodyParser.urlencoded({ extended: false })

require('./routes')(app, urlencodedParser)

// config
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

const server = app.listen(7070, function () {
    const host = server.address().address,
          port = server.address().port
    console.log("host: ", host)
    console.log("port: ", port)
})

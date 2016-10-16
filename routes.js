module.exports = function (app, urlencodedParser) {
    'use strict'

    app.get('/', function (req, res) {
       res.render('view.html')
    })

    app.get('/page2', function (req, res) {
       res.render('page2.html')
    })

    app.get('/getFormExample', function (req, res) {
        var response = {
            firstName:req.query.first,
            lastName:req.query.last,
            email:req.query.email
        }
        res.render('getFormExample.html', response)
    })

    app.post('/postFormExample', urlencodedParser, function (req, res) {
        var response = {
            firstName:req.body.first,
            lastName:req.body.last,
            email:req.body.email
        }
        res.render('postFormExample.html', response)
    })
}

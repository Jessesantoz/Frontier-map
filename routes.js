
function routes(app) {

    app.get('/', function(req, res) {
        res.render(__dirname + '/index.html')
    })
    

}

module.exports = routes

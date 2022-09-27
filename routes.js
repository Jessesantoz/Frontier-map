
function routes(app) {

    app.get('/', function(req, res) {
        res.render(__dirname + '/vews/mapa')
    })
    
    app.get('/frontier', function(req, res) {
       res.render(__dirname + '/view/frontier') 
    })

}

module.exports = routes

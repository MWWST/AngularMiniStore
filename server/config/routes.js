var orders = require('../controllers/orders.js');
module.exports= function(app){
	app.get('/',orders.home)
}
const config = require('./config');
let dbUrl = config.dbconfig.mongoDbUrl;
module.exports = function (mongoose) {
	mongoose.set("strictQuery", false);
	if (process.env.NODE_ENV == 'test') {
		dbUrl = config.dbconfig.mongoDbTestUrl;
	}
	let db = mongoose.connection;
	db.on('connected', function() {
		console.error('Mongodb connected');
	});
	db.on('error', function(error) {
		console.error('Error in mongodb connection:' + error);
		mongoose.disconnect();
	});
	db.on('disconnected', function() {
		console.error('Mongodb disconnected');
		mongoose.connect(dbUrl, config.dbOptions);
	});
	mongoose.connect(dbUrl, config.dbOptions);
};
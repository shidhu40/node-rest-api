let exports = module.exports;
exports.dbconfig = {
	"mongoDbUrl":"mongodb://localhost:27017/vod_db?authSource=admin",
	"mongoDbTestUrl":"mongodb://localhost:27017/test_db?authSource=admin",
};
export.dbOptions = {
	keepAlive:1,
	useNewUrlParser:true,
	useFindAndModify:false,
	useCreateIndex:true,
	useUnifiedTopology:true
};
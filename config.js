if (process.env.CLEARDB_DATABASE_URL) {
    var sqlUrl = url.parse(process.env.CLEARDB_DATABASE_URL);
    db = redis.createClient(redisToGo.port, redisToGo.hostname);
    db.auth(redisToGo.auth.split(":")[1]);
}  else {
	var sqlUrl = {};
}

 if (process.env.REDISTOGO_URL) {
	var redisToGo = url.parse(process.env.REDISTOGO_URL);
} else {
	var redisToGo = {}
}

exports.config = {
	mysqlHost: sqlUrl.hostname || "localhost",
	mysqlUser: sqlUrl.username || "root",
	mysqlPassword: sqlUrl.password || "",
	mysqlDB: sqlUrl.path.substr(1, sqlUrl.path.length - 1) || "shorten",
	mysqlPort: sqlUrl.port || 3306,

	redisHost: redisToGo.hostname || 'localhost',
	redisPort: redisToGo.port || 6379,

	site:'http://localhost:3000',
	port: process.env.PORT || 3000,
	linkMinLength:18,
	linkBits: 6,
	topN: 10
}

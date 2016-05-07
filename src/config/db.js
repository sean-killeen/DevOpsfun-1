var mongoose = require("mongoose");

var connectionString = process.env.MONGO_URL|| "mongodb://127.0.0.1:27017/devopsfun";

mongoose.connect(connectionString);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

module.exports = mongoose;

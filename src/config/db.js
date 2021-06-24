const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const conn = await mongoose.mongo.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		console.log(`Error: ${error.message}`)
	}
}
module.exports = connectDB

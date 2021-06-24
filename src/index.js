const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const taskRouter = require('./routes/taskRoutes.js')

const app = express()

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
})

// a test route
app.get('/', (req, res) => {
	res.send('Hello World')
})

// api endpoints for todos
app.use(taskRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT} in ${process.env.NODE_ENV} mode`)
})

const express = require('express')
const Task = require('../models/task.model')
const app = express()

app.get('/api/tasks', async (req, res) => {
	const tasks = await Task.find({})

	try {
		res.send(tasks)
	} catch (error) {
		res.status(500).send(error)
	}
})

app.post('/api/tasks', (req, res) => {
	const task = new Task(req.body)

	task.save()
		.then(() => {
			res.send(task)
		})
		.catch((error) => {
			res.send(error)
		})
})

module.exports = app

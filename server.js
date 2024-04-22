const express = require('express')
const app = express()
const PORT = 3333

const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'clim6er',
  database: 'student_course_db'
})

app.use(exprexx.json())

// Route to get all courses
app.get('/api/courses', async (req, res) => {
  const { rows } = await client.query('SELECT * FROM courses')

  res.json(rows)
})

app.post('/api/courses', async (req, res) => {
  const courseData = request.body
  await client.query('INSERT INTO courses (name, type) VALUES ($1, $2', [courseData.name, courseData.type])

  res.json({
    message: 'Course added seccessfully!'
  })
})

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log('Server started on port', PORT))

  })
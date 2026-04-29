const express = require('express')
const app = express()

app.use(express.json())

const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const siswaRoutes = require('./routes/siswa.routes')
const kelasRoutes = require('./routes/kelas.routes')

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/siswa', siswaRoutes)
app.use('/kelas', kelasRoutes)

app.get('/', (req, res) => {
  res.send('Hello Express')
})

module.exports = app
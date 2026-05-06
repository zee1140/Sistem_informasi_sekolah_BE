const express = require('express')
const cors = require('cors')

const app = express()

// 🔥 WAJIB BIAR GAK KEBLOCK
app.use(cors())

app.use(express.json())

// routes
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const siswaRoutes = require('./routes/siswa.routes')
const kelasRoutes = require('./routes/kelas.routes')
const guruRoutes = require('./routes/guru.routes')
const mapelRoutes = require('./routes/mapel.routes')

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/siswa', siswaRoutes)
app.use('/kelas', kelasRoutes)
app.use('/guru', guruRoutes)
app.use('/mapel', mapelRoutes)

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.use((err, req, res, next) => {
  console.error(err)

  res.status(err.statusCode || 500).json({
    message: err.message || 'INTERNAL_SERVER_ERROR'
  })
})

module.exports = app
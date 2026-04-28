const jwt = require('jsonwebtoken')
const AppError = require('../errors/AppError')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    console.log('HEADER:', authHeader) // 🔍 cek header masuk

    if (!authHeader) {
        return next(new AppError('TOKEN_REQUIRED', 401))
    }

    const token = authHeader.split(' ')[1]

    console.log('TOKEN:', token) // 🔍 cek token kebaca
    console.log('SECRET:', process.env.JWT_SECRET) // 🔍 cek env kebaca

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        console.log('DECODED:', decoded) // 🔍 cek isi token

        req.user = decoded
        next()
    } catch (err) {
        console.log('JWT ERROR:', err.message) // 🔥 ini penting
        next(new AppError('INVALID_TOKEN', 401))
    }
}
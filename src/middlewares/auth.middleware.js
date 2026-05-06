const jwt = require('jsonwebtoken')
const AppError = require('../errors/AppError')

// 🔥 GLOBAL blacklist
const tokenBlacklist = new Set()

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization

    console.log('HEADER:', authHeader)

    if (!authHeader) {
        return next(new AppError('TOKEN_REQUIRED', 401))
    }

    const token = authHeader.split(' ')[1]

    console.log('TOKEN:', token)

    // ❌ kalau token sudah logout
    if (tokenBlacklist.has(token)) {
        return next(new AppError('TOKEN_ALREADY_LOGGED_OUT', 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded
        req.token = token // 🔥 penting

        next()
    } catch (err) {
        console.log('JWT ERROR:', err.message)
        next(new AppError('INVALID_TOKEN', 401))
    }
}

module.exports = {
    auth,
    tokenBlacklist // 🔥 export biar dipakai controller
}
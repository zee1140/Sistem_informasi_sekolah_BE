const asyncHandler = require('../utils/asyncHandler')
const authService = require('../services/auth.service')

// 🔥 ambil blacklist dari middleware
const { tokenBlacklist } = require('../middlewares/auth.middleware')

exports.login = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const result = await authService.login(username, password)

  res.json({
    message: 'login success',
    token: result.token
  })
})

exports.logout = asyncHandler(async (req, res) => {
  const token = req.token // 🔥 dari middleware

  // ❌ kalau gak ada token
  if (!token) {
    return res.status(401).json({
      message: 'TOKEN_REQUIRED'
    })
  }

  // ❌ kalau logout ke-2
  if (tokenBlacklist.has(token)) {
    return res.status(400).json({
      message: 'TOKEN_ALREADY_LOGGED_OUT'
    })
  }

  // ✅ logout pertama
  tokenBlacklist.add(token)

  console.log('BLACKLIST:', tokenBlacklist) // debug

  res.json({
    message: 'logout success'
  })
})
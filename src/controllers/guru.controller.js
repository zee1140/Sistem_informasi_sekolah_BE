const pool = require('../config/db')

// GET semua guru
exports.getAll = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM guru')
  res.json(rows)
}

// GET by id
exports.getById = async (req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM guru WHERE id_guru = ?',
    [req.params.id]
  )
  res.json(rows[0])
}

// POST tambah guru
exports.create = async (req, res) => {
  await pool.query('INSERT INTO guru SET ?', [req.body])
  res.json({ message: 'Guru berhasil ditambahkan' })
}

// PUT update guru
exports.update = async (req, res) => {
  await pool.query(
    'UPDATE guru SET ? WHERE id_guru = ?',
    [req.body, req.params.id]
  )
  res.json({ message: 'Guru berhasil diupdate' })
}

// DELETE guru
exports.remove = async (req, res) => {
  await pool.query(
    'DELETE FROM guru WHERE id_guru = ?',
    [req.params.id]
  )
  res.json({ message: 'Guru berhasil dihapus' })
}
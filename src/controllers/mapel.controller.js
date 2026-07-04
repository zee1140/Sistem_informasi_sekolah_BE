const pool = require('../config/db')

// GET semua mapel
exports.getAll = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM mata_pelajaran')
  console.log('DATA:',rows)
  res.json(rows)
}

// GET by id
exports.getById = async (req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM mata_pelajaran WHERE id_mapel = ?',
    [req.params.id]
  )
  res.json(rows[0])
}

// POST tambah mapel
exports.create = async (req, res) => {
  await pool.query('INSERT INTO mata_pelajaran SET ?', [req.body])
  res.json({ message: 'Mapel berhasil ditambahkan' })
}

// PUT update mapel
exports.update = async (req, res) => {
  await pool.query(
    'UPDATE mata_pelajaran SET ? WHERE id_mapel = ?',
    [req.body, req.params.id]
  )
  res.json({ message: 'Mapel berhasil diupdate' })
}

// DELETE mapel
exports.remove = async (req, res) => {
  await pool.query(
    'DELETE FROM mata_pelajaran WHERE id_mapel = ?',
    [req.params.id]
  )
  res.json({ message: 'Mapel berhasil dihapus' })
}
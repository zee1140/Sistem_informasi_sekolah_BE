const pool = require('../config/db')

// ambil semua guru
exports.findAll = async () => {
  const [rows] = await pool.query('SELECT * FROM guru')
  return rows
}

// ambil guru by id
exports.findById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM guru WHERE id_guru = ?',
    [id]
  )
  return rows[0]
}

// tambah guru
exports.create = async (data) => {
  const { nip, nama_guru, mata_pelajaran } = data

  await pool.query(
    `INSERT INTO guru
    (nip, nama_guru, mata_pelajaran)
    VALUES (?, ?, ?)`,
    [nip, nama_guru, mata_pelajaran]
  )
}

// update guru
exports.updateById = async (id, data) => {
  await pool.query(
    'UPDATE guru SET ? WHERE id_guru = ?',
    [data, id]
  )
}

// hapus guru
exports.deleteById = async (id) => {
  await pool.query(
    'DELETE FROM guru WHERE id_guru = ?',
    [id]
  )
}
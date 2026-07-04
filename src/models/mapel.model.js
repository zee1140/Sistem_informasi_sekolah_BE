const pool = require('../config/db')

// ambil semua mapel
exports.findAll = async () => {
  const [rows] = await pool.query('SELECT * FROM mata_pelajaran')
  return rows
}

// ambil mapel by id
exports.findById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM mata_pelajaran WHERE id_mapel = ?',
    [id]
  )
  return rows[0]
}

// tambah mapel
exports.create = async (data) => {
  await pool.query(
    'INSERT INTO mata_pelajaran SET ?',
    [data]
  )
}

// update mapel
exports.updateById = async (id, data) => {
  await pool.query(
    'UPDATE mata_pelajaran SET ? WHERE id_mapel = ?',
    [data, id]
  )
}

// hapus mapel
exports.deleteById = async (id) => {
  await pool.query(
    'DELETE FROM mata_pelajaran WHERE id_mapel = ?',
    [id]
  )
}
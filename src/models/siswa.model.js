const db = require('../config/db')

// GET ALL
exports.findAll = async () => {
  const [rows] = await db.query(
    `SELECT 
      id,
      nama,
      nis,
      kode_kelas
    FROM siswa
    WHERE deleted_at IS NULL`
  )

  return rows
}

// GET BY ID
exports.findById = async (id) => {
  const [rows] = await db.query(
    `SELECT *
     FROM siswa
     WHERE id = ?
     AND deleted_at IS NULL`,
    [id]
  )

  return rows[0]
}

// CREATE
exports.create = async (data) => {
  const { id, nama, nis, kode_kelas } = data

  await db.query(
    `INSERT INTO siswa
    (id, nama, nis, kode_kelas)
    VALUES (?, ?, ?, ?)`,
    [id, nama, nis, kode_kelas]
  )
}

// UPDATE
exports.update = async (id, data) => {
  const { nama, nis, kode_kelas } = data

  await db.query(
    `UPDATE siswa
     SET
       nama = ?,
       nis = ?,
       kode_kelas = ?
     WHERE id = ?`,
    [nama, nis, kode_kelas, id]
  )
}

// DELETE (soft delete)
exports.delete = async (id) => {
  await db.query(
    `UPDATE siswa
     SET deleted_at = NOW()
     WHERE id = ?`,
    [id]
  )
}

// GET BY KELAS
exports.findByKelas = async (kodeKelas) => {
  const [rows] = await db.query(
    `SELECT *
     FROM siswa
     WHERE kode_kelas = ?
     AND deleted_at IS NULL`,
    [kodeKelas]
  )

  return rows
}

exports.findByKelas = async (kelas) => {
  const [rows] = await db.query(
    'SELECT * FROM siswa WHERE kode_kelas = ?',
    [kelas]
  )

  return rows
}
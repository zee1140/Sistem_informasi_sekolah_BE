const db = require('../config/db')

// GET ALL
exports.findAll = async () => {
  const [rows] = await db.query(
    `SELECT * FROM absensi
     WHERE deleted_at IS NULL`
  )

  return rows
}

// GET BY ID
exports.findById = async (id) => {
  const [rows] = await db.query(
    `SELECT * FROM absensi
     WHERE id = ?
     AND deleted_at IS NULL`,
    [id]
  )

  return rows[0]
}

// CREATE
exports.create = async (data) => {
  const {
    id,
    siswa_id,
    tanggal,
    status
  } = data

  await db.query(
    `INSERT INTO absensi
    (id, siswa_id, tanggal, status)
    VALUES (?, ?, ?, ?)`,
    [id, siswa_id, tanggal, status]
  )
}

// UPDATE
exports.update = async (id, data) => {
  const {
    siswa_id,
    tanggal,
    status
  } = data

  await db.query(
    `UPDATE absensi
     SET
       siswa_id = ?,
       tanggal = ?,
       status = ?
     WHERE id = ?`,
    [siswa_id, tanggal, status, id]
  )
}

// DELETE
exports.delete = async (id) => {
  await db.query(
    `UPDATE absensi
     SET deleted_at = NOW()
     WHERE id = ?`,
    [id]
  )
}
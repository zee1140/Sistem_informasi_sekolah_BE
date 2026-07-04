const db = require('../config/db')

// ambil semua kelas
exports.findAll = async () => {
  const [rows] = await db.query(
    `SELECT 
      kode_kelas,
      wali_kelas,
      kapasitas_siswa,
      created_at,
      updated_at
    FROM kelas 
    WHERE deleted_at IS NULL`
  )

  return rows
}

// ambil kelas by id
exports.findById = async (kode_kelas) => {
  const [rows] = await db.query(
    `SELECT 
      kode_kelas,
      wali_kelas,
      kapasitas_siswa
    FROM kelas 
    WHERE kode_kelas = ?
    AND deleted_at IS NULL`,
    [kode_kelas]
  )

  return rows[0]
}

// tambah kelas
exports.create = async (data) => {
  const {
    kode_kelas,
    wali_kelas,
    kapasitas_siswa
  } = data

  await db.query(
    `INSERT INTO kelas
    (
      kode_kelas,
      wali_kelas,
      kapasitas_siswa
    )
    VALUES (?, ?, ?)`,
    [
      kode_kelas,
      wali_kelas,
      kapasitas_siswa
    ]
  )
}

// update kelas
exports.update = async (oldKodeKelas, data) => {
  const {
    kode_kelas,
    wali_kelas,
    kapasitas_siswa
  } = data

  await db.query(
    `UPDATE kelas
    SET
      kode_kelas = ?,
      wali_kelas = ?,
      kapasitas_siswa = ?,
      updated_at = NOW()
    WHERE kode_kelas = ?`,
    [
      kode_kelas,
      wali_kelas,
      kapasitas_siswa,
      oldKodeKelas
    ]
  )
}

// soft delete
exports.softDelete = async (kode_kelas) => {
  await db.query(
    `UPDATE kelas
    SET deleted_at = NOW()
    WHERE kode_kelas = ?`,
    [kode_kelas]
  )
}
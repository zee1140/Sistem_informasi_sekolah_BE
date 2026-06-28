const db = require('../config/db')

// GET ALL
exports.findAll = async () => {
  const [rows] = await db.query(`
    SELECT
      absensi.id,
      absensi.siswa_id,
      siswa.nama AS nama_siswa,
      siswa.kode_kelas,
      absensi.tanggal,
      absensi.status,
      absensi.created_at,
      absensi.updated_at
    FROM absensi
    JOIN siswa
      ON siswa.id = absensi.siswa_id
    WHERE absensi.deleted_at IS NULL
  `)

  return rows
}

// GET BY ID
exports.findById = async (id) => {
  const [rows] = await db.query(`
    SELECT
      absensi.id,
      absensi.siswa_id,
      siswa.nama AS nama_siswa,
      siswa.kode_kelas,
      absensi.tanggal,
      absensi.status,
      absensi.created_at,
      absensi.updated_at
    FROM absensi
    JOIN siswa
      ON siswa.id = absensi.siswa_id
    WHERE absensi.id = ?
    AND absensi.deleted_at IS NULL
  `, [id])

  return rows[0]
}

// CREATE
exports.create = async (data) => {
  const { siswa_id, tanggal, status } = data
  const {randomUUID} = require('crypto')
  const id = randomUUID() // ← generate UUID di sini
  console.log('INSERT:', { id , siswa_id ,tanggal, status} ) // ← log UUID yang dihasilkan
  await db.query(`
    INSERT INTO absensi (id, siswa_id, tanggal, status)
    VALUES (?, ?, ?, ?)
  `, [id, siswa_id, tanggal, status])
}

// UPDATE
exports.update = async (id, data) => {
  const {
    siswa_id,
    tanggal,
    status
  } = data

  await db.query(`
    UPDATE absensi
    SET
      siswa_id = ?,
      tanggal = ?,
      status = ?,
      updated_at = NOW()
    WHERE id = ?
  `, [
    siswa_id,
    tanggal,
    status,
    id
  ])
}

// DELETE (SOFT DELETE)
exports.delete = async (id) => {
  await db.query(`
    UPDATE absensi
    SET
      deleted_at = NOW()
    WHERE id = ?
  `, [id])
}

exports.rekapNilai = async () => {
  const [rows] = await db.query(`
    SELECT
      s.id AS siswa_id,
      s.nama AS nama_siswa,
      s.kode_kelas,

      COUNT(a.id) AS total_absensi,

      SUM(CASE WHEN a.status='hadir' THEN 1 ELSE 0 END) AS hadir,
      SUM(CASE WHEN a.status='izin' THEN 1 ELSE 0 END) AS izin,
      SUM(CASE WHEN a.status='sakit' THEN 1 ELSE 0 END) AS sakit,
      SUM(CASE WHEN a.status='alpa' THEN 1 ELSE 0 END) AS alpa,

      ROUND(
        IFNULL(
          SUM(CASE WHEN a.status='hadir' THEN 1 ELSE 0 END)
          / NULLIF(COUNT(a.id),0) * 100,
        0),2
      ) AS persentase

    FROM siswa s
    LEFT JOIN absensi a
      ON s.id = a.siswa_id
      AND a.deleted_at IS NULL

    GROUP BY
      s.id,
      s.nama,
      s.kode_kelas

    ORDER BY s.nama
  `)

  return rows.map(item => {

    const persen = Number(item.persentase)

    let grade = "E"

    if (persen >= 90) grade = "A"
    else if (persen >= 80) grade = "B"
    else if (persen >= 70) grade = "C"
    else if (persen >= 60) grade = "D"

    return {
      ...item,
      grade
    }
  })
}
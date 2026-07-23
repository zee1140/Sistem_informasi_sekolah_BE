const pool = require('../config/db')

exports.findAll = async () => {
  const [rows] = await pool.query(`
    SELECT
      n.id,
      s.id AS siswa_id,
      s.nama,
      s.nis,
      s.kode_kelas,
      n.tugas,
      n.uh,
      n.uts,
      n.uas
    FROM nilai n
    JOIN siswa s ON n.siswa_id = s.id
    ORDER BY s.kode_kelas, s.nama
  `)

  return rows
}

exports.findById = async (id) => {
  const [rows] = await pool.query(
    `SELECT * FROM nilai WHERE id=?`,
    [id]
  )

  return rows[0]
}

exports.create = async (data) => {
  await pool.query(
    `INSERT INTO nilai
    (siswa_id,tugas,uh,uts,uas)
    VALUES (?,?,?,?,?)`,
    [
      data.siswa_id,
      data.tugas,
      data.uh,
      data.uts,
      data.uas
    ]
  )
}

exports.updateById = async (id,data)=>{
  await pool.query(
    `UPDATE nilai
     SET tugas=?,
         uh=?,
         uts=?,
         uas=?
     WHERE id=?`,
    [
      data.tugas,
      data.uh,
      data.uts,
      data.uas,
      id
    ]
  )
}

exports.deleteById = async(id)=>{
  await pool.query(
    `DELETE FROM nilai WHERE id=?`,
    [id]
  )
}

exports.rekap = async () => {
  const [rows] = await pool.query(`
    SELECT
      s.id,
      s.nis,
      s.nama,
      s.kode_kelas,

      n.tugas,
      n.uh,
      n.uts,
      n.uas,

      ROUND(
        (n.tugas+n.uh+n.uts+n.uas)/4,
      2) AS rata_rata,

      CASE
        WHEN ((n.tugas+n.uh+n.uts+n.uas)/4)>=90 THEN 'A'
        WHEN ((n.tugas+n.uh+n.uts+n.uas)/4)>=80 THEN 'B'
        WHEN ((n.tugas+n.uh+n.uts+n.uas)/4)>=70 THEN 'C'
        WHEN ((n.tugas+n.uh+n.uts+n.uas)/4)>=60 THEN 'D'
        ELSE 'E'
      END AS grade,

      CASE

        WHEN s.kode_kelas LIKE 'XII%'
        THEN
          CASE
            WHEN ((n.tugas+n.uh+n.uts+n.uas)/4)>=75
            THEN 'Lulus'
            ELSE 'Tidak Lulus'
          END

        ELSE
          CASE
            WHEN ((n.tugas+n.uh+n.uts+n.uas)/4)>=75
            THEN 'Naik Kelas'
            ELSE 'Tidak Naik'
          END

      END AS status

    FROM nilai n
    JOIN siswa s
      ON s.id=n.siswa_id

    ORDER BY
      s.kode_kelas,
      s.nama
  `)

  return rows
}
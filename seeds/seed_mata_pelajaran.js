exports.seed = async function(knex) {
  await knex('mata_pelajaran').del()

  await knex('mata_pelajaran').insert([
    { nama_mapel: 'Matematika' },
    { nama_mapel: 'Bahasa Indonesia' },
    { nama_mapel: 'Bahasa Inggris' },
    { nama_mapel: 'Fisika' },
    { nama_mapel: 'Kimia' },
    { nama_mapel: 'Biologi' },
    { nama_mapel: 'Sejarah' },
    { nama_mapel: 'Geografi' }
  ])
}
exports.seed = async function(knex) {
  // 🔥 hapus data lama dulu
  await knex('siswa').del()

  // insert data baru
  await knex('siswa').insert([
    {
      id: '10000000-0000-0000-0000-000000000001',
      kode_kelas: 'X-PPLG-1',
      nama: 'siswa 1'
    },
    {
      id: '10000000-0000-0000-0000-000000000002',
      kode_kelas: 'X-PPLG-1',
      nama: 'siswa 2'
    },
    {
      id: '10000000-0000-0000-0000-000000000003',
      kode_kelas: 'X-PPLG-1',
      nama: 'siswa 3'
    }
  ])
}
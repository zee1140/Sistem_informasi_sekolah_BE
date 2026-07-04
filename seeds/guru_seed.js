exports.seed = async function(knex) {
  // hapus data lama
  await knex('guru').del()

  // insert data baru
  await knex('guru').insert([
    {
      nip: '1001',
      nama_guru: 'Pak Yoga',
      jenis_kelamin: 'L',
      tanggal_lahir: '1980-05-10',
      alamat: 'Jakarta',
      no_hp: '081234567890',
      mata_pelajaran: 'Basis Data'
    },
    {
      nip: '1002',
      nama_guru: 'Bu Nuha',
      jenis_kelamin: 'P',
      tanggal_lahir: '1985-08-15',
      alamat: 'Bandung',
      no_hp: '082345678901',
      mata_pelajaran: 'DKV'
    },
    {
      nip: '1003',
      nama_guru: 'Pak Bani',
      jenis_kelamin: 'L',
      tanggal_lahir: '1979-03-20',
      alamat: 'Surabaya',
      no_hp: '083456789012',
      mata_pelajaran: 'UI'
    },
    {
      nip: '1004',
      nama_guru: 'Bu Vitriani',
      jenis_kelamin: 'P',
      tanggal_lahir: '1990-11-25',
      alamat: 'Yogyakarta',
      no_hp: '084567890123',
      mata_pelajaran: 'Kimia'
    },
    {
      nip: '1005',
      nama_guru: 'Pak Dedi',
      jenis_kelamin: 'L',
      tanggal_lahir: '1982-07-12',
      alamat: 'Semarang',
      no_hp: '085678901234',
      mata_pelajaran: 'Bahasa Inggris'
    }
  ])
}
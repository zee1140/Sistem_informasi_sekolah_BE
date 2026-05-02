/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('guru', function(table) {
    table.increments('id_guru').primary()
    table.string('nip').unique()
    table.string('nama_guru')
    table.enu('jenis_kelamin', ['L', 'P'])
    table.date('tanggal_lahir')
    table.text('alamat')
    table.string('no_hp')

    // mapel langsung di sini
    table.string('mata_pelajaran')

    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('guru')
};
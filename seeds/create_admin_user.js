 const { hash } = require("bcrypt");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const existing = await knex('users')
    .where({ username: 'admin' })
    .first()

  if (!existing) {
    const hashedPassword = await hash('1', 10)

    await knex('users').insert([
      {
        id: "10000000-0000-0000-0000-000000000001",
        username: 'admin',
        password: hashedPassword,
        role: 'admin'
      }
    ])
  }
};

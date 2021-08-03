exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.varchar('id', 36).notNullable()
    table.varchar('first_name', 255).notNullable()
    table.varchar('last_name', 255).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}

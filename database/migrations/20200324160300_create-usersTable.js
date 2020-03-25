
exports.up = function(knex) {
    return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("username", 20)
        .unique()
        .notNullable();
      table
        .string("password")
        .notNullable();
      table
        .string("department", 20)
        .notNullable()
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };
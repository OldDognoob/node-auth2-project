exports.up = function(knex) {
    return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("username", 128)
        .unique()
        .notNullable();
      table
        .string("password")
        .unique()
        .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };
//for creating table in database
exports.up = function(knex) {
    return knex.schema
        .createTable('client', function (table) {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('address', 255).notNullable();
            table.integer('salery');
        })
    };
 
// for delete table in databases
exports.down = function(knex) {
return knex.schema
    .dropTable("client")
};
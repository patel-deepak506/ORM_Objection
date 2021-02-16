const { Model } = require('objection');
const knex = require('../confing/config');
Model.knex(knex);
 
// it is connect objection to database by orm
class Users extends Model {
    static get tableName() {
        return 'client';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                address: { type: 'string' },
                salery: { type: 'decimal' },
            }
        }
    }
}
module.exports = Users;
const User = require('../models/user');

//This is objection's queries which is select automatic data

module.exports = class service {
    async findAll(txn){
        const user = User.query(txn);
        return user;
    }
 
    async create(details){
        console.log(details);
        const user = await  User.query().insert(details);userId
        return user;

    }

    async findById(userId){
        const user = await User.query().findById(userId);
        if (user === undefined) {
            return ({"sorry": "userId " + userId + " not found!"})
        }
        console.log(user);
        return user
    }

    async userUpdate(id, user_details) {
        const userUpdate = await User.query().findById(id).patch(user_details);
        return userUpdate;
    }

    async deleteById(deleteId){
        const user = await User.query().deleteById(deleteId)
        return user;
    }
}
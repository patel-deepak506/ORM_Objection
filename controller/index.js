const express = require('express');
const { as } = require('../confing/config');
const { fromDatabaseJson } = require('../models/user');
const user = require('../service/orm');
const service = new user();
const router = express.Router();

//inserting data to databases

router.post('/post', async function(req, res) {
    await service.create(req.body)
    .then((data) => {
        console.log(data, "user data");
        res.send({"success": "details register successfully"});
    }).catch((err) => {
        res.send(err);
    })
});

// find all data from databases
router.get('/user',async(req,res)=>{
    await service.findAll()
    .then(data=>{
        console.log(data);
        res.send(data)
    })
    .catch(err=>{
        console.log(err);console.log(service);
        res.send(err);
    })
})


// find data form database by userId
router.get('/user/:id', async function(req, res, next) {
    let userId = req.params.id;
    await service.findById(userId).then((data) => {

        console.log(data, 'fffffffff');
        res.send(data);
    }).catch((err) => {
        res.send(err)
    });
})

//update data by id
router.put('/update/:id',async(req,res)=>{
    let user = req.params.id;
    await service.userUpdate(user,req.body)
    .then(data=>{
        res.send("data successful updated");
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})


// delete data by userId to delete colum
router.delete('/delete/:id',async(req,res)=>{
    let user = req.params.id;
    await service.deleteById(user)
    .then(data=>{
        res.send("user successful deleted")
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

module.exports = router

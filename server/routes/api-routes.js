const { Router } = require('express')
const mongoose = require('mongoose')
const Model = require('../models/models')

const router = Router()

const users = []
const db = 'mongodb://127.0.0.1:27017/calumoz'

mongoose.connect(db, (err, res) => {
    if (err) {
        console.log('Failed to connected to ' + db)
    } else {
        console.log('Connected to ' + db)
    }
})

// GET
router.get('/users' , function(req, res){
    
    Model.find({} , (err, users) => {
        if(err){
            res.status(404).send(err)
        }else {
            res.status(200).send(users)
        }
    })
})

// post

router.post('/users', function(req, res){
    let model = new Model(req.body)
    model.save()
    res.status(201).send(model)
    
})


module.exports = router
const { request } = require("express");

const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/getData',(req,res) =>{
    console.log('get Request in Nodejs');
    // User.find().then(res => console.log(res));

   User.find((err, users) => res.json(users));

});

router.post('/user',(req,res) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName : req.body.middleName,
        phonenum:req.body.phonenum,
        email:req.body.email
    })

    console.log('coming to node express');
    // Checking whether the user is existed or not
    User.findOne({email:newUser.email}).then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error:"User already exists"});
        }
        else{
            newUser.save((err,user) => {
                console.log(err, user)
                if(err){
                    res.json({msg:"Failed to add User"});
                }
                else{
                    res.json({msg:"Successfully added User"});
                }
            });
        }
    });
});

module.exports = router;
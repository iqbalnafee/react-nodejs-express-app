const { response } = require('express');
const express = require('express');

const router = express.Router();

const signUpTemplateCopy = require('../models/SignUpModels'); 

router.post('/signup',(req,res) => {
    
    const signedUpUser = new signUpTemplateCopy({

        fullName:req.body.fullName, 
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password

    });

    signedUpUser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error => {
        res.json(error);
    });

});


module.exports = router;

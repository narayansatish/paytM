const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { zod } = require('zod');
import User from '../db';
const userSchema = zod.object({
    username: z.string(),
    firstName:z.string(),
    lastName: z.string(),
    password: z.string()
  });

router.post('/signUp', async (req, res) => {

    let {userName , firstName ,lastName , password}=req.body;
    let user ={userName , firstName , lastName, password};

    const userValidation = userSchema.safeParse(user);
    if (userValidation.success) {
        const existingUser = await User.findOne({ username });

     if (existingUser) {        
            let result = await User.insertOne(user) 
        
           
          return res.status(202).json({msg :"User Created Successfully.",id :result._id} );
        } else {       
          return res.status(400).send("Username already present!");
        }
      
    } else {
     
      res.status(400).send("User Details are not properly entered.")
    }

});

router.post('/signin', (req, res) => {
 
});

module.exports = router;

const User = require('../models/user.model');


//getting all users

exports.getAllUsers = async (req,res,next) => {

    const user = await User.find();

    if(!user) {

        return res.status(404).send({

            message:"user not found"
        })
    }

    res.status(200).send({

        message:"success",
        user

    })


}


//getting user by Id

exports.getUser = async (req,res,next) => {

    const user = await User.findById(req.params.id);

    if(!user) {

        return res.status(404).send({

            message:"user not found"
        })
    }

    res.status(200).send({

        message:"success",
        user

    })
}

//

exports.registerUser = async (req,res,next) => {

  let user = {

    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
  }

    if(!user) {

        return res.status(404).send({

            message:"user not found"
        })
    }

    res.status(200).send({

        message:"success",
        user

    })


}
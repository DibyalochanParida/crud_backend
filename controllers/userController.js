
import User from "../models/user.js";
import httpStatus from 'http-status-codes';

export default class UserController{

// get data

static async getUsers(req,res){
    try{
        const data = await User.findAll({});
        res.status(httpStatus.OK).send({ status: true, data: data });
    }catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: error.message });
    }
}

static async getUser(req,res){
    try{
        const data = await User.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(httpStatus.OK).send({ status: true, data: data });
    }catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: error.message });
    }
}

// post data

static async postUsers(req,res){
    try{
        const postData=req.body;
        const data = await User.create(postData);
        res.status(httpStatus.OK).send({ status: true, data: data });
    }catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: error.message });
    }
   
}

// Delete data

static async deleteUser(req,res){
    try{
        const data = await User.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(httpStatus.OK).send({ status: true, data: data });
    }catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: error.message });
    }
  
}

// Update data

static async patchUser(req,res){
    try{
        const updatedData= req.body;
        const data = await User.update(updatedData,{
            where:{
                id:req.params.id
            }
        });
        res.status(httpStatus.OK).send({ status: true, data: data });
    }catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: error.message });
    }
}

static async putUser(req,res){
    try{
        const updatedData= req.body;
        const data = await User.update(updatedData,{
            where:{
                id:req.params.id
            }
        });
        res.status(httpStatus.OK).send({ status: true, data: data });
    }catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: error.message });
    }
}
}




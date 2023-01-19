const {badRequestError}  = require('../errors/index')
const jwt = require('jsonwebtoken');



const login = async(req,res) => {
    const {username,password} = req.body;
    if(!username || !password){
        throw new badRequestError('Please provide the username and password');
    }
        const id = new Date().getTime().toString();

        const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});

        return res.status(200).json({msg:'user created',token});
     
}

const dashborad = async(req,res) => {
    const {id,username} = req.user;
    
    res.status(200).json({msg:`Hello, ${username}`,secret:`Your id is ${id}`});

    
}

module.exports = {login,dashborad}
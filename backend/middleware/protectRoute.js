import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const protectRoute = async(req,res,next)=>{
try {
    const token =req.cookies.jwt;
    if(!token){ 
        return res.status(401).json({error: "Not Authorized -no token provided"}) ; 
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); 
    if(!decoded){
        return res.status(401).json({error: "Not Authorized -no valid token"}) ;
    }

    const user= await User.findById(decoded.userId).select("-password");
    if(!user){
        return res.status(401).json({error: " user not found"}) ;  
    }

    req.user=user;
    next();
} catch (error) {
    console.error("error in protectRoute middleware: ", error.message);
    res.status(500).json({error: "Internal Server Error"});
    }
};


export default protectRoute;
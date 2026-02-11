module.exports=(req,res,next)=>{
    const token =req.header["authorization"];

    if(!token || token!="admin12"){
        return res.status(401).json({
            message:"Unauthorized"
        });
    }
    next();
};
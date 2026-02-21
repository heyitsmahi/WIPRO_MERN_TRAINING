const mongoose = require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","owner"],
        default:"user"
    },
    downloadedApps:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Application"
        }
    ],
},
{timestamps:true,}
);
module.exports = mongoose.model("User", userSchema);

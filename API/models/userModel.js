import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    Stream: {
        type: String,
        required: true,
        enum: ['Bio Science', 'Physical Science', 'E-technology'], // Specify the allowed dropdown options
    },
    profilePicture:{
        type:String,
        default: 'https://static-00.iconduck.com/assets.00/profile-default-icon-1024x1023-4u5mrj2v.png' 
    },
    admin:{
        type:Boolean,
        default:false,
    }

},
{timestamps:true});

const User = mongoose.model('User', userSchema);
//test comment

export default User


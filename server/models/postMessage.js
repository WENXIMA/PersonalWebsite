import mongoose from 'mongoose';



//DataBase Schema
const postSchema = mongoose.Schema({
    FirstName:String,
    LastName:String,
    PhoneNumber:String,
    Email:String,
    Message:String,
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;
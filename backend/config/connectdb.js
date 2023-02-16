const mongoose =require("mongoose") ;
const connectdb= async()=>{
    mongoose.set('strictQuery', true)
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db is connected")
    
} catch (error) {
    console.log("db is not connected");
}
}
module.exports=connectdb ;
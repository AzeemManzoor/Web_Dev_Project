import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:15,max:60},
    fees:{type:mongoose.Decimal128, required:true}
})

const StudentModel = mongoose.model("student",studentSchema);

export default StudentModel
const mongoose = require('mongoose');   //import mongoose from
let  studentSchema = mongoose.Schema({
    seating_no: Number,
    arabic_name: String,
    total_degree: Number,
    student_case: Number,
    student_case_desc: String,
    c_flage: Number,
    total_marks: Number,
    percentage: Number,
});

module.exports=mongoose.model("Degree",studentSchema)

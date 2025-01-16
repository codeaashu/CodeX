import mongoose, {model, Schema, models} from "mongoose";

const CADATASchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    contactNumber: {type:Number, required:true},
    college: {type:String, required:true},
    collegeCity: {type:String, required:true},
    branch: {type:String, required:true},
    graduationYear: {type:String, required:true},
    linkdin: {type:String, required:true},
    instagram: {type:String, required:true},
    github: {type:String, required:true},
    twitter: {type:String, required:true},
    whyPart: {type:String, required:true},
    
});

export const CADATA = models.CADATA || model('CADATA', CADATASchema);
import mongoose, {model, Schema, models} from "mongoose";

const CPDATASchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    contactNumber: {type:Number, required:true},
    community: {type:String, required:true},
    designation: {type:String, required:true},
    strength: {type:String, required:true},
    logoLink: {type:String, required:true},
    linkdin: {type:String, required:true},
    twitter: {type:String, required:true},
    instagram: {type:String, required:true},
    github: {type:String, required:true},
    registrations: {type:String, required:true},
    expectations: {type:String, required:true},
});

export const CPDATA = models.CPDATA || model('CPDATA', CPDATASchema);
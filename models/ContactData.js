import mongoose, {model, Schema, models} from "mongoose";

const ContactDataSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    contactNumber: {type:Number, required:true},
    query: {type:String, required:true},
});

export const ContactData = models.ContactData || model('ContactData', ContactDataSchema);
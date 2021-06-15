import {
  Schema
} from 'mongoose';
import mongoose from 'mongoose';

export const User = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  customerName: {type: String, required: true},
  tickets: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "tickets",
    }],
  
});

const users = mongoose.model("users", User);
export default users;
import {
  Schema
} from 'mongoose';
import mongoose from 'mongoose';

export const Ticket = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  customer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users",
    required: true},
  customerRequest: {type: String, required: true},
  status: {type: String, required: true}
});

const tickets = mongoose.model("tickets", Ticket);
export default tickets;
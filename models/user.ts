
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  clerkId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  role: {
    type: String,
    default: "user"
  }
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User", userSchema)
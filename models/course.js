import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  instructor: String,
  duration: String, // e.g., "4 weeks"
  image: String, // filename or URL
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Course", courseSchema);

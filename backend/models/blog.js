import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  slug: String,
  date: String,
  author: String,
  content: String,
});

export default mongoose.model("Blog", blogSchema);

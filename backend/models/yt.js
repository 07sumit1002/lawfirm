// models/yt.js
import mongoose from "mongoose";

const youtubeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  id: { type: String, required: true },
});

export default mongoose.model("Youtube", youtubeSchema);

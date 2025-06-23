// routes/youtubeRoutes.js
import express from "express";
import Youtube from "../models/yt.js";

const router = express.Router();

// POST: Add a new YouTube video
router.post("/", async (req, res) => {
  const { title, url, id } = req.body;

  if (!title || !url || !id) {
    return res.status(400).json({ error: "Title, URL, and ID are required." });
  }

  try {
    const newVideo = new Youtube({ title, url, id });
    await newVideo.save();
    res.status(201).json({ message: "Video added", video: newVideo });
  } catch (err) {
    console.error("Error adding video:", err);
    res.status(500).json({ error: "Failed to add video" });
  }
});

// GET: Retrieve all YouTube videos
router.get("/", async (req, res) => {
  try {
    const videos = await Youtube.find();
    res.json(videos);
  } catch (err) {
    console.error("Error adding video:", err);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

export default router;

import express from "express";
import Blog from "../models/blog.js";

const router = express.Router();

// POST blog
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Fixed slug route
router.get("/slug/:slug", async (req, res) => {
  try {
    const article = await Blog.findOne({ slug: req.params.slug.trim().toLowerCase() });
    if (!article) return res.status(404).json({ message: "Not found" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

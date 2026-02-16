import express from "express";
import { authMiddleware } from "../../configs/middlewareConfig.js";

const router = express.Router();

router.get("/api/", authMiddleware, async (req, res) => {
  res.json({
    story: req.user.story,
    timeline: req.user.timeline,
    album: req.user.album,
  });
});

router.put("/api/story", authMiddleware, async (req, res) => {
  try {
    req.user.story = req.body.story;
    await req.user.save();
    res.json({ message: "Story updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update story" });
  }
});

router.put("/api/timeline", authMiddleware, async (req, res) => {
  try {
    req.user.timeline = req.body.timeline;
    await req.user.save();
    res.json({ message: "Timeline updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update timeline" });
  }
});

router.put("/api/album", authMiddleware, async (req, res) => {
  try {
    req.user.album = req.body.album;
    await req.user.save();
    res.json({ message: "Album updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update album" });
  }
});

export default router;

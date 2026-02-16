import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const userSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    email: String,
    story: {
      type: String,
      default: "",
    },
    timeline: [timelineSchema],
    album: [String],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

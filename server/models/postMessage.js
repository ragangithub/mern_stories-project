import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("PostMessage", postSchema);

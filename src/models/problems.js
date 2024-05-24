import mongoose, { Schema } from "mongoose";

const problemSchema = new Schema(
  {
    title: String,
    description: String,
    difficulty: String,
    tags: [String],
    solutions: [String],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Problems = mongoose.model("Problems", problemSchema);

export default Problems;

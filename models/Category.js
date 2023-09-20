import mongoose, { model, models, Schema } from "mongoose";
const CategorySchema = new Schema(
  {
    name: String,
    parent: Number,
    properties: { type: Object },
  }
);

export const Category = models?.Category || mongoose.model("Category", CategorySchema);

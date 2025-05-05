const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  responsibilities: { type: [String], required: true },
});

const cvSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    linkedin: { type: String },
    objective: { type: String, required: true },
    experience: [experienceSchema],
    education: { type: String, required: true },
    skills: [String],
    certifications: [String],
    languages: [String],
    additionalInfo: [String],
  },
  { timestamps: true }
);

const GeneralCV =
  mongoose.models.GeneralCV || mongoose.model("GeneralCV", cvSchema);

module.exports = GeneralCV;

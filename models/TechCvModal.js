import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  stack: String,
  liveLink: String,
  githubLink: String,
});

const techCVSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: String,
  title: String,
  phone: String,
  email: String,
  github: String,
  linkedin: String,
  skills: {
    frontend: String,
    backend: String,
    database: String,
    devops: String,
  },
  education: String,
  projects: [projectSchema],
});

const TechCV = mongoose.models.TechCV || mongoose.model("TechCV", techCVSchema);
export default TechCV;

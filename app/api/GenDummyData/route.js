export async function GET() {
  const genDummyData = {
    userId: "12345",
    name: "John Doe",
    title: "Software Developer",
    phone: "1234567890",
    email: "johndoe@example.com",
    linkedin: "https://linkedin.com/in/johndoe",
    objective:
      "Passionate software developer with experience in building scalable web applications.",
    experience: [
      {
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "Jan 2020 - Present",
        responsibilities: [
          "Developed responsive web applications using React.js.",
          "Collaborated with backend developers to integrate APIs.",
          "Worked closely with design teams to implement UI/UX improvements.",
        ],
      },
    ],
    education: "Bachelor of Science in Computer Science, XYZ University, 2019",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS"],
    certifications: ["Certified JavaScript Developer", "React.js Mastery"],
    languages: ["English", "Spanish"],
    additionalInfo: [
      "Volunteer at local tech events",
      "Contributor to open-source projects",
    ],
  };

  return new Response(JSON.stringify(genDummyData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

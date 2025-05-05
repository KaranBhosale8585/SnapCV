export async function GET() {
  const techdData = {
    name: "John Doe",
    title: "Full Stack Developer",
    phone: "1234567890",
    email: "johndoe@example.com",
    github: "github.com/JohnDoe",
    linkedin: "linkedin.com/in/johndoe",
    skills: {
      frontend: "React, Next.js, Tailwind CSS, HTML, CSS, JavaScript",
      backend: "Node.js, Express.js, MongoDB, REST APIs",
      database: "MongoDB, PostgreSQL, MySQL",
      devops: "Git, Github, Docker, CI/CD",
    },
    education:
      "Bachelor of Technology, Computer Science, University of Example (2021 - 2025)",
    projects: [
      {
        title: "TaskMaster (Task Management App)",
        description:
          "A web app for managing tasks with features like due dates, priority, and categorization.",
        stack: "React, Node.js, MongoDB, Express.js, Tailwind CSS",
        liveLink: "https://taskmaster.example.com",
        githubLink: "https://github.com/JohnDoe/TaskMaster",
      },
      {
        title: "Chatify (Real-time Chat App)",
        description:
          "A real-time messaging app with group chats, direct messages, and notifications.",
        stack: "React, Node.js, Socket.io, MongoDB, Tailwind CSS",
        liveLink: "https://chatify.example.com",
        githubLink: "https://github.com/JohnDoe/Chatify",
      },
      {
        title: "ShopEasy (E-commerce App)",
        description:
          "An e-commerce platform with user authentication, payment gateway, and product management.",
        stack: "React, Node.js, MongoDB, Stripe, Tailwind CSS",
        liveLink: "https://shopeasy.example.com",
        githubLink: "https://github.com/JohnDoe/ShopEasy",
      },
    ],
  };

  return new Response(JSON.stringify(techdData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

import React from "react";
import GitHubIcon from "./icons/GitHubIcon";

export default function Projects() {
  const projectData = [
    {
      title: "AiChess",
      description: "Real-time chess platform with AI gameplay",
      tech: ["MERN Stack", "Socket.io", "Stockfish Engine", "MongoDB"],
      features: [
        "Real-time multiplayer gameplay with Socket.io",
        "AI gameplay with customizable difficulty levels",
        "JWT authentication and role-based access control",
        "ELO rating system and matchmaking",
        "Game analysis and PGN/FEN notation support",
      ],
      githubLink: "https://github.com/arpanmehta05/aichess",
      liveLink: "https://aichess.com",
    },
    {
      title: "Study Notion",
      description: "Full-stack e-learning platform",
      tech: ["MERN Stack", "MongoDB", "Cloudinary", "Razorpay"],
      features: [
        "Role-based access control for Students, Instructors, and Admins",
        "Razorpay payment gateway integration",
        "Video uploads via Cloudinary",
        "Instructor dashboard with analytics",
        "Automated email notifications",
      ],
      githubLink: "https://github.com/arpanmehta05/study-notion",
      liveLink: "https://studynotion.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my major projects that showcase my skills in
            full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{project.description}</p>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  >
                    <GitHubIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-white mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new projects and learning new
              technologies. Check back soon for more exciting developments!
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black">2</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black">7+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black">100%</div>
                <div className="text-gray-600">Functional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

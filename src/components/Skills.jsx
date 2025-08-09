import React from 'react';

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["C++", "Java"]
        },
        {
            title: "Web Development",
            skills: ["HTML", "JavaScript", "React.js", "Tailwind CSS", "Node.js", "Express.js", "WebSocket"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "GitHub", "VS Code", "Postman"]
        },
        {
            title: "Authentication & Security",
            skills: ["JWT Authentication", "OAuth", "Firebase Authentication"]
        },
        {
            title: "Soft Skills",
            skills: ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management", "Attention to Detail"]
        }
    ];

    const concepts = [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "RESTful API Design",
        "Real-time Web Applications",
        "Database Design & Optimization",
        "Version Control & Collaboration"
    ];

    const currentlyLearning = [
        { skill: "Advanced React Patterns", status: "In Progress" },
        { skill: "System Design", status: "In Progress" },
        { skill: "Cloud Technologies", status: "Planned" }
    ];

    return (
        <section id="skills" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and competencies in software development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {skillCategories.slice(0, 3).map((category, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center space-x-3">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                            <span className="text-gray-300 text-lg">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-6 text-white">Software Development Concepts</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {concepts.map((concept, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                        <span className="text-gray-300 text-lg">{concept}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {skillCategories.slice(3).map((category, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center space-x-3">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                            <span className="text-gray-300 text-lg">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-6 text-white">Currently Learning</h3>
                            <div className="space-y-4">
                                {currentlyLearning.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-gray-300 text-lg">{item.skill}</span>
                                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${item.status === 'In Progress' ? 'bg-green-500/20 text-green-300' :
                                            item.status === 'Planned' ? 'bg-yellow-500/20 text-yellow-300' :
                                                'bg-blue-500/20 text-blue-300'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
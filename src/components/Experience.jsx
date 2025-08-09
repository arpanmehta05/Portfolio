import React from 'react';

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>

                        <div className="space-y-12">
                            <div className="relative flex items-start">
                                <div className="absolute left-6 w-4 h-4 bg-white rounded-full -translate-x-1/2 mt-2"></div>
                                <div className="ml-16">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <h3 className="text-xl font-bold text-white">DSA Team Member</h3>
                                            <span className="text-gray-400 text-sm mt-1 sm:mt-0">Open Source Chandigarh</span>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-gray-300 leading-relaxed">
                                                Actively contributing to the Open Source Chandigarh community, focusing on Data Structures & Algorithms (DSA) and front-end development.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed">
                                                Collaborated with other developers to solve algorithmic challenges, enhancing problem-solving skills and efficiency.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed">
                                                Engaged in community discussions, helping peers with JavaScript and React-related queries to foster collaborative learning.
                                            </p>
                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">DSA</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">JavaScript</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">React</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">Open Source</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex items-start">
                                <div className="absolute left-6 w-4 h-4 bg-white rounded-full -translate-x-1/2 mt-2"></div>
                                <div className="ml-16">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <h3 className="text-xl font-bold text-white">Student Developer</h3>
                                            <span className="text-gray-400 text-sm mt-1 sm:mt-0">Chitkara University</span>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-gray-300 leading-relaxed">
                                                Pursuing Bachelor of Engineering in Computer Science with exceptional academic performance (GPA: 9.67).
                                            </p>
                                            <p className="text-gray-300 leading-relaxed">
                                                Actively participating in technical events, hackathons, and coding competitions to enhance practical skills.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed">
                                                Developing full-stack projects using modern technologies and best practices in software development.
                                            </p>
                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">Computer Science</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">Full-Stack Development</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">Problem Solving</span>
                                            <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">Academic Excellence</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-black mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in-left">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Education</h3>
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h4 className="text-xl font-semibold mb-2">Chitkara University</h4>
                                <p className="text-gray-700 mb-2">Bachelor of Engineering Computer Science</p>
                                <p className="text-gray-600 mb-2">GPA: 9.67</p>
                                <p className="text-gray-600">Aug. 2023 – May 2027</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">Honors & Certificates</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-1">Dean's List Awardee</h4>
                                    <p className="text-gray-700">Achieved academic excellence by securing a position in the department for Second Semester – 2023</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-1">Selected Finalist – Tech Abhivyakti</h4>
                                    <p className="text-gray-700">Recognized for technical innovation and problem-solving skills</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 animate-fade-in-right">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                I'm a passionate Computer Science student at Chitkara University with a strong foundation in full-stack development.
                                My journey in technology began with a curiosity for building things that make a difference.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                I specialize in creating modern web applications using the MERN stack, with expertise in real-time features,
                                authentication systems, and scalable architectures. My projects reflect my commitment to clean code,
                                user experience, and innovative problem-solving.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                When I'm not coding, you'll find me contributing to open-source projects, participating in hackathons,
                                and continuously learning new technologies to stay ahead in this ever-evolving field.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <div className="text-3xl font-bold text-black">7+</div>
                                <div className="text-gray-600">Technologies</div>
                            </div>
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <div className="text-3xl font-bold text-black">∞</div>
                                <div className="text-gray-600">Learning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

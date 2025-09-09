import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJava } from "react-icons/di";

export function Hero() {
    const technologies = [
        { name: "HTML", icon: <FaHtml5 className="inline mr-2 text-2xl text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="inline mr-2 text-2xl text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="inline mr-2 text-2xl text-yellow-400" /> },
        { name: "ReactJS", icon: <FaReact className="inline mr-2 text-2xl text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="inline mr-2 text-2xl text-cyan-400" /> },
        { name: "Java", icon: <DiJava className="inline mr-2 text-2xl text-red-500" /> },
        { name: "Git & Github", icon: <><FaGitAlt className="inline mr-1 text-2xl text-orange-600" /><FaGithub className="inline mr-2 text-2xl text-gray-800" /></> }
    ];

    return (
        <section className="flex flex-col items-start w-full min-h-max">
            <div className="flex flex-col w-full">
                <h1 className="mb-4 text-3xl font-bold md:text-4xl text-emerald-400">About Me</h1>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                    I'm Rudy, <span className="text-emerald-400">A Frontend Developer</span>
                </h2>
                <p className="mt-4 text-lg text-white md:mt-5 md:text-xl lg:text-2xl">
                    I am a frontend developer with 2 years of experience in developing all kinds of projects,
                    using technologies such as HTML, CSS, JavaScript, Tailwind, and ReactJS. I also have intermediate
                    knowledge in the programming language Java, with a strong passion for learning every day
                    and achieving new goals.
                </p>
            </div>

            <div className="flex flex-col w-full gap-5 mt-8 md:flex-row md:gap-8 md:mt-10">
                <section className="flex-1 mb-5 mr-0 md:mr-6 md:mb-0">
                    <h3 className="pb-3 text-xl font-medium border-b border-gray-600 md:text-2xl text-emerald-400">
                        Experience: <span className="font-normal text-white">2+ years</span>
                    </h3>
                    <h3 className="pb-3 mt-4 text-xl font-medium border-b border-gray-600 md:text-2xl text-emerald-400">
                        Availability: <span className="font-normal text-white">Part-time</span>
                    </h3>
                    <h3 className="pb-3 mt-4 text-xl font-medium border-b border-gray-600 md:text-2xl text-emerald-400">
                        Age: <span className="font-normal text-white">20</span>
                    </h3>
                </section>

                <section className="flex-1 mb-5 mr-0 md:mr-6 md:mb-0">
                    <h3 className="pb-3 text-xl font-medium border-b border-gray-600 md:text-2xl text-emerald-400">
                        Language used: <span className="font-normal text-white">JavaScript</span>
                    </h3>
                    <h3 className="pb-3 mt-4 text-xl font-medium border-b border-gray-600 md:text-2xl text-emerald-400">
                        Country: <span className="font-normal text-white">Cuba</span>
                    </h3>
                    <h3 className="pb-3 mt-4 text-xl font-medium border-b border-gray-600 md:text-2xl text-emerald-400">
                        Phone: <span className="font-normal text-white">+53 56498546</span>
                    </h3>
                </section>

                <section className="flex-1 mr-0 md:mr-6">
                    <h3 className="pb-3 text-xl font-medium border-b border-gray-600 md:text-2xl text-emerald-400">
                        Technologies:
                    </h3>
                    <div className="mt-4 space-y-3">
                        {technologies.map((tech, index) => (
                            <div key={index} className="text-base text-white md:text-lg lg:text-xl">
                                {tech.icon} {tech.name}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
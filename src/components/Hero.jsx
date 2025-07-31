import { Link } from "react-router-dom";

export function Hero() {
    const technologies = [
        { name: "HTML", percentage: 100 },
        { name: "CSS", percentage: 100 },
        { name: "JavaScript", percentage: 100 },
        { name: "ReactJS", percentage: 100 },
        { name: "Tailwind", percentage: 100 },
        { name: "Java", percentage: 75 },
        { name: "C++", percentage: 50 },
        {name: "Git&Github", percentage: 100}
    ];

    return (
        <section className="flex flex-col items-start w-full h-screen bg-gray-800 pl-[16.666%] pr-[5%] pt-[2%] ml-10">
            {/* Contenedor principal */}
            <div className="flex flex-col w-full">
                <h1 className="mb-4 text-3xl font-bold text-emerald-400 md:text-5xl">About Me</h1>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                    I'm Rudy, <span className="text-emerald-400">A Frontend Developer</span>
                </h2>
                <p className="mt-6 text-xl text-white">
                    I am a frontend developer with 2 years of experience in developing all kinds of projects,
                    using technologies such as HTML, CSS, JavaScript, Tailwind, and ReactJS. I also have intermediate
                    knowledge in the programming languages Java and C++, with a strong passion for learning every day
                    and achieving new goals.
                </p>
            </div>

            {/* Secciones de información */}
            <div className="flex w-full gap-6 mt-12">
                {/* Sección 1 */}
                <section className="flex-1 mr-5">
                    <h3 className="pb-2 text-xl font-medium border-b border-gray-600 text-emerald-400">
                        Experience: <span className="font-normal text-white">2+ years</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-xl font-medium border-b border-gray-600 text-emerald-400">
                        Availability: <span className="font-normal text-white">Part-time</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-xl font-medium border-b border-gray-600 text-emerald-400">
                        Age: <span className="font-normal text-white">20</span>
                    </h3>

                    <div className="flex gap-4 mt-36">
                        <Link to='/about'>
                            <button className="px-6 py-3 font-medium text-white transition-colors rounded-lg bg-emerald-500 hover:bg-emerald-600">
                                Hire Me
                            </button>
                        </Link>
                        <Link to='/contact'>
                            <button className="px-6 py-3 font-medium text-white transition-colors rounded-lg bg-emerald-500 hover:bg-emerald-600">
                                Contact
                            </button>
                        </Link>
                    </div>
                </section>

                {/* Sección 2 */}
                <section className="flex-1 mr-5">
                    <h3 className="pb-2 text-xl font-medium border-b border-gray-600 text-emerald-400">
                        Language used: <span className="font-normal text-white">JavaScript</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-xl font-medium border-b border-gray-600 text-emerald-400">
                        Country: <span className="font-normal text-white">Cuba</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-xl font-medium border-b border-gray-600 text-emerald-400">
                        Phone: <span className="font-normal text-white">+53 56498546</span>
                    </h3>
                </section>

                {/* Sección 3 */}
                <section className="flex-1 mr-5">
                    <div className="mt-4 space-y-4">
                        {technologies.map((tech, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-white">
                                    <span>{tech.name}</span>
                                </div>
                                <div className="w-full h-2 mt-1 overflow-hidden bg-gray-600 rounded-full">
                                    <div
                                        className="h-full rounded-full bg-emerald-400 animate-fill"
                                        style={{ 
                                            width: `${tech.percentage}%`,
                                            animationDelay: `${index * 0.15}s`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
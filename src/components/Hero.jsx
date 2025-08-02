import { Link } from "react-router-dom";

export function Hero() {
    const technologies = [
        { name: "HTML", percentage: 100 },
        { name: "CSS", percentage: 100 },
        { name: "JavaScript", percentage: 100 },
        { name: "ReactJS", percentage: 100 },
        { name: "Tailwind", percentage: 100 },
        { name: "Java", percentage: 75 },
        {name: "Git&Github", percentage: 100}
    ];

    return (
        <section className="flex flex-col items-start w-full min-h-screen bg-gray-800 pl-4 md:pl-[16.666%] pr-4 md:pr-[5%] pt-24 md:pt-[2%] ml-0 md:ml-10 pb-12">
            <div className="flex flex-col w-full">
                <h1 className="mb-4 text-2xl font-bold md:text-3xl text-emerald-400">About Me</h1>
                <h2 className="mt-4 text-xl font-semibold text-white md:text-2xl">
                    I'm Rudy, <span className="text-emerald-400">A Frontend Developer</span>
                </h2>
                <p className="mt-4 text-base text-white md:mt-6 md:text-lg">
                    I am a frontend developer with 2 years of experience in developing all kinds of projects,
                    using technologies such as HTML, CSS, JavaScript, Tailwind, and ReactJS. I also have intermediate
                    knowledge in the programming language Java , with a strong passion for learning every day
                    and achieving new goals.
                </p>
            </div>

            <div className="flex flex-col w-full gap-4 mt-8 md:flex-row md:gap-6 md:mt-12">
                <section className="flex-1 mb-6 mr-0 md:mr-5 md:mb-0">
                    <h3 className="pb-2 text-lg font-medium border-b border-gray-600 md:text-xl text-emerald-400">
                        Experience: <span className="font-normal text-white">2+ years</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-lg font-medium border-b border-gray-600 md:text-xl text-emerald-400">
                        Availability: <span className="font-normal text-white">Part-time</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-lg font-medium border-b border-gray-600 md:text-xl text-emerald-400">
                        Age: <span className="font-normal text-white">20</span>
                    </h3>

                    <div className="flex flex-col gap-4 mt-8 sm:flex-row md:mt-36">
                        <Link to='https://drive.google.com/uc?export=download&id=1iZl0OYtgNKpsy6GIV_ckQ147zmTTNU_I'>
                            <button className="px-4 py-2 font-medium text-white transition-colors rounded-lg md:px-6 md:py-3 bg-emerald-500 hover:bg-emerald-600">
                                Download CV
                            </button>
                        </Link>
                        <Link to='/contact'>
                            <button className="px-4 py-2 font-medium text-white transition-colors rounded-lg md:px-6 md:py-3 bg-emerald-500 hover:bg-emerald-600">
                                Contact
                            </button>
                        </Link>
                    </div>
                </section>

                <section className="flex-1 mb-6 mr-0 md:mr-5 md:mb-0">
                    <h3 className="pb-2 text-lg font-medium border-b border-gray-600 md:text-xl text-emerald-400">
                        Language used: <span className="font-normal text-white">JavaScript</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-lg font-medium border-b border-gray-600 md:text-xl text-emerald-400">
                        Country: <span className="font-normal text-white">Cuba</span>
                    </h3>
                    <h3 className="pb-2 mt-4 text-lg font-medium border-b border-gray-600 md:text-xl text-emerald-400">
                        Phone: <span className="font-normal text-white">+53 56498546</span>
                    </h3>
                </section>

                <section className="flex-1 mr-0 md:mr-5">
                    <div className="mt-4 space-y-4">
                        {technologies.map((tech, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-white">
                                    <span className="text-sm md:text-base">{tech.name}</span>
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
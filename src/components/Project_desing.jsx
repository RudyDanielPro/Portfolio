import { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Project_desing() {
    const projects = [
        {
            id: 1,
            title: "Bibliographic Manager",
            description: "Web platform developed with the aim of managing bibliographic materials for the students of that institution.",
            image: "src/assets/Bibliographic Manager.png",
            githubLink: "https://github.com/RudyDanielPro/EVB-Entorno-Virtual-Bibliogr-fico",
            projectLink: "https://evb-entorno-virtual-bibliogr-fico.onrender.com/"
        },
        {
            id: 2,
            title: "Medical consultation platform",
            description: "Platform designed with the aim of facilitating the work of medical students and doctors who support the professional development of these individuals..",
            image: "src/assets/Medical consultation platform.png",
            githubLink: "https://github.com/RudyDanielPro/Medical-consultation-platform",
            projectLink: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "This portfolio website showcases the work of a full stack developer in a sleek and modern design.",
            image: "src/assets/Portfolio.png",
            githubLink: "https://github.com/RudyDanielPro/Portfolio",
            projectLink: "#"
        },
        {
            id: 4,
            title: "Space ship game",
            description: "A desktop minigame developed in Java with Maven as a package manager, aimed at developing the skills of young children on a computer.",
            image: "src/assets/Space ship game.png",
            githubLink: "https://github.com/RudyDanielPro/Space-Ship-Game",
            projectLink: "#"
        },
        {
            id: 5,
            title: "Number Converter",
            description: "Desktop application developed in Java with the aim of performing conversions between binary, decimal, and hexadecimal numbers.",
            image: "src/assets/NumberConverter.png",
            githubLink: "https://github.com/RudyDanielPro/Convertidor",
            projectLink: "#"
        }
    ];

    const [currentProject, setCurrentProject] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentProject((prev) => (prev + 1) % projects.length);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [projects.length, isPaused]);

    const goToNext = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const goToPrev = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section 
            className="flex flex-col items-start w-full h-screen bg-gray-800 pl-[16.666%] pr-[5%] pt-[2%] ml-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <h1 className="mb-8 text-3xl font-bold text-emerald-400 md:text-5xl">Projects</h1>
            
            <div className="relative w-full h-3/4">
                {/* Contenedor del proyecto actual */}
                <div 
                    className="flex flex-col items-center h-full overflow-hidden transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group"
                    key={projects[currentProject].id}
                >
                    <div className="relative w-full overflow-hidden h-3/4">
                        <img 
                            src={projects[currentProject].image} 
                            alt={`Imagen del proyecto ${projects[currentProject].title}`} 
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        
                        {/* Botones superpuestos centrados */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                            <Link 
                                to={projects[currentProject].projectLink}
                                className="flex items-center px-6 py-3 font-medium text-white transition-colors rounded-lg bg-emerald-500 hover:bg-emerald-600"
                            >
                                <FiExternalLink className="mr-2" />
                                View Project
                            </Link>
                            <Link 
                                to={projects[currentProject].githubLink}
                                className="flex items-center px-6 py-3 font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700"
                            >
                                <FiGithub className="mr-2" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                    
                    {/* Texto centrado debajo de la imagen */}
                    <div className="w-full p-4 text-center">
                        <h2 className="text-xl font-bold text-white">{projects[currentProject].title}</h2>
                        <p className="max-w-md m-3 mx-auto text-white">{projects[currentProject].description}</p>
                    </div>
                </div>

                {/* Controles de navegación */}
                <button 
                    onClick={goToPrev}
                    className="absolute left-0 p-2 text-white transform -translate-x-10 -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 hover:bg-opacity-75"
                >
                    &lt;
                </button>
                <button 
                    onClick={goToNext}
                    className="absolute right-0 p-2 text-white transform translate-x-10 -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 hover:bg-opacity-75"
                >
                    &gt;
                </button>

                {/* Indicadores */}
                <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentProject(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentProject === index ? 'bg-emerald-400' : 'bg-gray-500 hover:bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
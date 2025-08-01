import { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import bibliographicManagerImg from '../assets/Bibliographic Manager.png'
import medicalPlatformImg from '../assets/Medical consultation platform.png'
import portfolioImg from '../assets/Portfolio.png'
import spaceGameImg from '../assets/Space ship game.png'
import numberConverterImg from '../assets/NumberConverter.png'

export function Project_desing() {
    const projects = [
        {
            id: 1,
            title: "Bibliographic Manager",
            description: "Web platform developed to manage bibliographic materials for students.",
            image: bibliographicManagerImg,
            githubLink: "https://github.com/RudyDanielPro/EVB-Entorno-Virtual-Bibliogr-fico",
            projectLink: "https://evb-entorno-virtual-bibliogr-fico.onrender.com/"
        },
      {
            id: 2,
            title: "Medical consultation platform",
            description: "Platform designed to facilitate the work of medical students and doctors.",
            image: medicalPlatformImg,
            githubLink: "https://github.com/RudyDanielPro/Medical-consultation-platform",
            projectLink: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "This portfolio website showcases the work of a full stack developer.",
            image: portfolioImg,
            githubLink: "https://github.com/RudyDanielPro/Portfolio",
            projectLink: "#"
        },
        {
            id: 4,
            title: "Space ship game",
            description: "A desktop minigame developed in Java with Maven as package manager.",
            image: spaceGameImg,
            githubLink: "https://github.com/RudyDanielPro/Space-Ship-Game",
            projectLink: "#"
        },
        {
            id: 5,
            title: "Number Converter",
            description: "Desktop application developed in Java to perform conversions between number systems.",
            image: numberConverterImg,
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
        }, 5000);

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
            className="flex flex-col items-center w-full min-h-screen px-4 pb-8 bg-gray-800 pt-28 md:pt-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Título con margen superior para móviles */}
            <h1 className="sticky z-10 w-full py-4 mb-6 text-3xl font-bold text-center bg-gray-800 text-emerald-400 top-16 md:static md:py-0 md:bg-transparent">
                Projects
            </h1>
            
            <div className="relative flex flex-col items-center justify-center flex-1 w-full max-w-4xl">
                {/* Tarjeta del proyecto */}
                <div className="w-full max-w-2xl">
                    <div 
                        className="flex flex-col overflow-hidden transition-all duration-300 bg-slate-950 rounded-xl group"
                        key={projects[currentProject].id}
                    >
                        <div className="relative w-full overflow-hidden aspect-video">
                            <img 
                                src={projects[currentProject].image} 
                                alt={`Project ${projects[currentProject].title}`} 
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 sm:flex-row sm:gap-6 group-hover:opacity-100">
                                <Link 
                                    to={projects[currentProject].projectLink}
                                    className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg sm:text-base bg-emerald-500 hover:bg-emerald-600"
                                >
                                    <FiExternalLink className="mr-2" />
                                    View Project
                                </Link>
                                <Link 
                                    to={projects[currentProject].githubLink}
                                    className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-lg sm:text-base hover:bg-gray-700"
                                >
                                    <FiGithub className="mr-2" />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                        
                        <div className="p-6 text-center">
                            <h2 className="mb-2 text-xl font-bold text-white">{projects[currentProject].title}</h2>
                            <p className="text-gray-300">{projects[currentProject].description}</p>
                        </div>
                    </div>
                </div>

                {/* Controles de navegación */}
                <button 
                    onClick={goToPrev}
                    className="absolute left-0 p-2 text-white transform -translate-x-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 hover:bg-opacity-75 md:-translate-x-6"
                >
                    &lt;
                </button>
                <button 
                    onClick={goToNext}
                    className="absolute right-0 p-2 text-white transform translate-x-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 hover:bg-opacity-75 md:translate-x-6"
                >
                    &gt;
                </button>

                {/* Indicadores de posición */}
                <div className="flex justify-center w-full gap-2 mt-6">
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
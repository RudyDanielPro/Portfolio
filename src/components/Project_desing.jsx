import { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import bibliographicManagerImg from '../assets/Bibliographic Manager.png';
import medicalPlatformImg from '../assets/Medical consultation platform.png';
import portfolioImg from '../assets/Portfolio.png';
import spaceGameImg from '../assets/Space ship game.png';
import numberConverterImg from '../assets/NumberConverter.png';

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
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

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

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            goToNext();
        }

        if (touchStart - touchEnd < -50) {
            goToPrev();
        }
    };

    return (
        <section 
            className="relative w-full min-h-screen px-4 py-20 bg-gray-800 md:px-8 lg:px-16 xl:px-32"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container mx-auto">
                {/* Título */}
                <h1 className="mb-8 text-3xl font-bold text-center text-emerald-400 md:mb-12 md:text-4xl lg:text-5xl">
                    Projects
                </h1>
                
                {/* Contenedor principal del carrusel */}
                <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
                    {/* Tarjeta del proyecto */}
                    <div 
                        className="w-full max-w-3xl transition-all duration-300 rounded-xl"
                        key={projects[currentProject].id}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="relative overflow-hidden bg-slate-950 rounded-xl group aspect-video">
                            <img 
                                src={projects[currentProject].image} 
                                alt={`Project ${projects[currentProject].title}`} 
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            
                            {/* Overlay con botones */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 sm:flex-row sm:gap-6 group-hover:opacity-100">
                                <Link 
                                    to={projects[currentProject].projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg sm:text-base bg-emerald-500 hover:bg-emerald-600"
                                >
                                    <FiExternalLink className="mr-2" />
                                    View Project
                                </Link>
                                <Link 
                                    to={projects[currentProject].githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-lg sm:text-base hover:bg-gray-700"
                                >
                                    <FiGithub className="mr-2" />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                        
                        {/* Información del proyecto */}
                        <div className="p-6 text-center">
                            <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">{projects[currentProject].title}</h2>
                            <p className="text-gray-300 md:text-lg">{projects[currentProject].description}</p>
                        </div>
                    </div>

                    {/* Controles de navegación */}
                    <button 
                        onClick={goToPrev}
                        className="absolute hidden p-3 text-white transform -translate-y-1/2 bg-black rounded-full opacity-70 left-2 top-1/2 hover:opacity-100 md:block lg:left-4"
                        aria-label="Previous project"
                    >
                        &lt;
                    </button>
                    <button 
                        onClick={goToNext}
                        className="absolute hidden p-3 text-white transform -translate-y-1/2 bg-black rounded-full opacity-70 right-2 top-1/2 hover:opacity-100 md:block lg:right-4"
                        aria-label="Next project"
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
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Controles móviles */}
            <div className="flex justify-center gap-8 mt-8 md:hidden">
                <button 
                    onClick={goToPrev}
                    className="p-3 text-white bg-black rounded-full opacity-70 hover:opacity-100"
                    aria-label="Previous project"
                >
                    &lt;
                </button>
                <button 
                    onClick={goToNext}
                    className="p-3 text-white bg-black rounded-full opacity-70 hover:opacity-100"
                    aria-label="Next project"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}
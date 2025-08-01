import { useState } from 'react';
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

    return (
        <section className="flex flex-col items-start w-full min-h-screen bg-gray-800 pl-4 md:pl-[16.666%] pr-4 md:pr-[5%] pt-24 md:pt-[4%] ml-0 md:ml-10">
            <h1 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl text-emerald-400">Projects</h1>
            
            <div className="flex flex-col flex-wrap w-full gap-4 md:flex-row">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="relative flex flex-col items-center p-4 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group w-full md:w-[calc(50%-0.5rem)]"
                    >
                        <div className="relative w-full mb-4 overflow-hidden rounded-lg aspect-video">
                            <img 
                                src={project.image} 
                                alt={`Project ${project.title}`} 
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 sm:flex-row sm:gap-6 group-hover:opacity-100">
                                <Link 
                                    to={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-emerald-500 hover:bg-emerald-600"
                                >
                                    <FiExternalLink className="mr-2" />
                                    View Project
                                </Link>
                                <Link 
                                    to={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700"
                                >
                                    <FiGithub className="mr-2" />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                        
                        <h2 className="mb-2 text-lg font-bold text-emerald-400 group-hover:text-white">{project.title}</h2>
                        <p className="text-sm text-center text-gray-300 group-hover:text-white">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
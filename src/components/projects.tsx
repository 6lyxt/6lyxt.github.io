import type React from "react";
import {
    DockerOriginal,
    NextjsOriginal,
    PostgresqlOriginal,
    TypescriptOriginal,
} from "devicons-react";
import {ArrowUpRight} from "lucide-react";

type Project = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: 'unique hairsalon',
        description: 'a hairsalon website with booking functionality, appointment management and an advanced notification system for both customers and employees.',
        technologies: ['typescript', 'nextjs', 'postgresql', 'pm2', 'docker'],
        link: 'https://unique-hairsalon.at',
        image: "/img/unique_thumb.jpg",
    },
];

const techIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
        case 'typescript':
            return <TypescriptOriginal size={14}/>;
        case 'nextjs':
            return <NextjsOriginal size={14}/>;
        case 'postgresql':
            return <PostgresqlOriginal size={14}/>;
        case 'docker':
            return <DockerOriginal size={14}/>;
        default:
            return null;
    }
};

const domainOf = (link: string) => link.replace(/^https?:\/\//, '').replace(/\/$/, '');

const ProjectsComponent: React.FC = () => {
    return (
        <div className="projects">
            <h1>projects</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <article key={project.id} className="project-card">
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-media">
                            <img src={project.image} alt={`${project.name} preview`} loading="lazy"/>
                        </a>
                        <div className="project-body">
                            <div className="project-head">
                                <h2 className="project-title">
                                    <a href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
                                </h2>
                                <a href={project.link} target="_blank" rel="noreferrer" className="project-visit">
                                    {domainOf(project.link)} <ArrowUpRight size={12}/>
                                </a>
                            </div>
                            <p className="project-desc">{project.description}</p>
                            <div className="tag-list">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tag">
                                        {techIcon(tech)}{tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default ProjectsComponent;

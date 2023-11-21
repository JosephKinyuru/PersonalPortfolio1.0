import '../Css/Projects.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

export default function styledProject ({project}){
    return (
        <li className='StyledProject'>
            <div className="project-content">
                <div>
                <p className="project-overline">Featured Project</p>

                <h3 className="project-title">
                    <a href={project.external}>{project.title}</a>
                </h3>

                <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: project.html }}
                />

                {project.tech.length && (
                    <ul className="project-tech-list">
                    {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                    </ul>
                )}

                <div className="project-links">
                    {project.cta && (
                    <a href={project.cta} aria-label="Course Link" className="cta">
                        Learn More
                    </a>
                    )}
                    {project.github && (
                    <a href={project.github} aria-label="GitHub Link">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    )}
                    {project.external && !project.cta && (
                    <a href={project.external} aria-label="External Link" className="external">
                        <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                    </a>
                    )}
                </div>
                </div>
            </div>

            <div className="project-image">
                <a href={project.externalLink || project.external || '#'}>
                    <LazyLoadImage
                        alt={project.title}
                        src={project.cover}
                        className="img"
                    />
                </a>
            </div> 
        </li>
    )
}

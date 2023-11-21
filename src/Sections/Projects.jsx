import '../Css/Projects.css';
import { useState, useEffect } from 'react';
import StyledProject from '../Components/StyledProject';
import { Fade } from 'react-awesome-reveal';

import AutoTrackImage from '/src/Assets/AutoTrack.png';
import CookingConfessionsImage from '/src/Assets/CookingConfessions.png';
import StoryCircleImage from '/src/Assets/StoryCircle.png';


export default function Projects() {
    const [projects, setProjects] = useState([]);

    const handleVisibilityChange = (inView) => {
        if (inView) {
        //   console.log('Section is in view!');
        } else {
        //   console.log('Section is out of view!');
        }
      };

    useEffect(() => {
      const sampleProjects = [
        {
            date: '1',
            title: 'Cooking confessions',
            cover: CookingConfessionsImage, 
            github: 'https://github.com/JosephKinyuru/CookingConfessions',
            external: 'https://nimble-rugelach-115504.netlify.app/',
            tech: ['Javascript ( vanilla )', 'Html', 'CSS3'],
            html:'Cooking confessions has a curated data set of different recipes which are catehorized into four categories. Users are able to view the available recipes after loading the site and can then click to view one full recipe in a different section and then add a comment to it. Users can also choose which category to view.',
        },
        {
            date: '2',
            title: 'Story Circle',
            cover: StoryCircleImage, 
            github: 'https://github.com/JosephKinyuru/Story-Circle',
            external: 'https://magical-dolphin-be64a8.netlify.app/',
            tech: ['React', 'Flask', 'PostgreSQL', 'CORS'],
            html:'Story Circle is a social platform connecting book enthusiasts, enabling them to create and join book clubs. Users can engage in discussions, explore a rich library of books, and share their insights through comments.',        
        },
        {
            date: '3',
            title: 'Auto Track',
            cover: AutoTrackImage, 
            github: 'https://github.com/barondevke/AutoTrackFinal',
            external: 'https://autotrackorg.netlify.app/',
            tech: ['React', 'Public API', 'CSS3'],
            html:'AutoTrack is a website that allows users to buy and sell cars. It allows users to select from a vide variety of cars to buy from and they can even search for a specific car or narrow down their search according to their budget. Users can also add their own car to sell on the site.'   

        }
      ];
  
      setProjects(sampleProjects);
    }, []);

    return (
        <Fade delay={200} direction="left" onVisibilityChange={handleVisibilityChange}>
            <section id="projects">
            <h2 className="numbered-heading" >
                Some Things I’ve Built
            </h2>
            <ul className='StyledProjectGrid'>
                {projects.map((project, i) => (
                    <StyledProject key={i} project={project} />
                ))}
            </ul>
            </section>
        </Fade>
    );
}

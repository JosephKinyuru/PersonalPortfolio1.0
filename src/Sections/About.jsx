import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import '../Css/About.css'; 
import { Fade } from 'react-awesome-reveal';

const About = () => {

  const handleVisibilityChange = (inView) => {
    if (inView) {
      // console.log('Section is in view!');
    } else {
      // console.log('Section is out of view!');
    }
  };

  return (
    <Fade delay={200} direction="right" onVisibilityChange={handleVisibilityChange}>
      <section id="about" >
        <h2 className="numbered-heading">About Me</h2>
        <div className='inner'>
          <div className='styledText'>
            <div>
            <p>
              Hello! My name is Joseph Kinyuru and I enjoy developing web applications. My interest in web applications started in 2019 when I discovered scratch.
            </p>
            <p>
              Fast forward to today, and I`ve had the privilege of developing multiple apps of my own with frameworks more challenging than scratch. I still look forward to learning and gaining more experience in software engineering.
            </p>
            <p>
              Here are some few technologies I`ve been working with recently:
            </p>
            </div>
            <ul className='skill-list'> 
              <li>Javascript</li>
              <li>React (vite)</li>
              <li>Typescript</li>
              <li>Django</li>
              <li>PostgreSQL</li>
              <li>Flask</li>
              <li>Docker</li>
            </ul>
        </div>
        
        <div className="StyledPic">
          <div className="wrapper">
            <LazyLoadImage
              className="img"
              src="https://via.placeholder.com/300"
              alt="Headshot"
              effect="blur"
            />
          </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default About;


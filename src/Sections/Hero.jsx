import '../Css/Hero.css';
import { Fade } from 'react-awesome-reveal';

export default function Hero () {



    const handleVisibilityChange = (inView) => {
        if (inView) {
        //   console.log('Section is in view!');
        } else {
        //   console.log('Section is out of view!');
        }
      };

    return (
        <>
            <Fade delay={200} direction="left" onVisibilityChange={handleVisibilityChange}>
                <section id="hero">
                    <h1>Hi, my name is</h1>
                    <h2 className="big-heading">Joseph Kinyuru.</h2>
                    <h3 className="big-heading">I build cool web apps.</h3>
                    <p>
                    I`m a software engineer experienced in building (and sometimes designing) unique web applications.
                    </p>
                </section>
            </Fade>
        </>
    )
}
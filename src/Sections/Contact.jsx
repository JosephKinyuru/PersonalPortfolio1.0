import '../Css/Contact.css';
import { Fade } from 'react-awesome-reveal';

export default function Contact () {
    const email = 'josephkinyuru22@gmail.com'

    const handleVisibilityChange = (inView) => {
        if (inView) {
        //   console.log('Section is in view!');
        } else {
        //   console.log('Section is out of view!');
        }
      };

    return (
        <>
            <Fade delay={200} direction="right" onVisibilityChange={handleVisibilityChange}>
                <section id="contact">
                    <h2 className="numbered-heading overline">Want to utilize some of my skills?</h2>

                    <h2 className="title">Get In Touch</h2>

                    <p>
                    My inbox is always open.
                    Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>

                    <a className="email-link" href={`mailto:${email}`}>
                    Say Hello <i className="fa-regular fa-envelope fa-lg"></i>
                    </a>
                </section>
            </Fade>
        </>
    )
}
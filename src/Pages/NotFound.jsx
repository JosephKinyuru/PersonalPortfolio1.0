import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

function NotFound() {
    return (
    <>
      <main className='NotFoundMain' contextMenu='fillHeight'>
        <h1 className='StyledTitle'>404</h1>
        <h2 className='StyledSubTitle'>Page Not Found</h2>
        <Link to="/" className='StyledHomeButton'> Go Home</Link>
        <br/>
        <br/>
        <Footer/>
      </main>
    </>
    );
  }
  
  export default NotFound;
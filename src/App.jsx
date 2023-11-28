import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index';
import NotFound from './Pages/NotFound';
import Resume from './Pages/Resume';

export default function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  );
}

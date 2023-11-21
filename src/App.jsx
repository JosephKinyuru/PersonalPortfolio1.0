import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index';
import NotFound from './Pages/NotFound';

export default function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  );
}

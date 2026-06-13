import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage   from './pages/SkillsPage';
import ContactPage  from './pages/ContactPage';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 font-label-md">
      <div className="text-7xl text-primary-container primary-glow">404</div>
      <div className="text-on-surface-variant uppercase tracking-widest">NODE_NOT_FOUND</div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<HomePage />}     />
        <Route path="/about"    element={<AboutPage />}    />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills"   element={<SkillsPage />}   />
        <Route path="/contact"  element={<ContactPage />}  />
        <Route path="*"         element={<NotFound />}     />
      </Routes>
    </BrowserRouter>
  );
}

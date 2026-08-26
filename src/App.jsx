import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import LearningPage from './pages/LearningPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <SiteLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/learning" element={<LearningPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </SiteLayout>
        </Router>
    );
}

export default App;

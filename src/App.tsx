import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { DestinationsPage } from './pages/Destinations';
import { HomePage } from './pages/Home';
import { NotFoundPage } from './pages/NotFound';
import { PackagesPage } from './pages/Packages';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

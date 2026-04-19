import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import AtmMapPage from './pages/AtmMapPage';
import MerchantsPage from './pages/MerchantsPage';
import SpendLitecoinPage from './pages/SpendLitecoinPage';
import GuidePage from './pages/GuidePage';

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/maps/atms" element={<AtmMapPage />} />
        <Route path="/maps/merchants" element={<MerchantsPage />} />
        <Route path="/maps/spend-litecoin" element={<SpendLitecoinPage />} />
        <Route path="/guides" element={<GuidePage />} />
      </Routes>
    </SiteLayout>
  );
}

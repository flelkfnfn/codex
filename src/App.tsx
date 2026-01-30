import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { About } from './pages/About';
import { ArtistDetail } from './pages/ArtistDetail';
import { Artists } from './pages/Artists';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './styles/global.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

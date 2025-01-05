import { HashRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/week1" element={<Week1 />} />
          <Route path="/week2" element={<Week2 />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;

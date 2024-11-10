import { Header, Home, Footer, GenerateCertificate, Dashboard } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/generate-certificate" element={<GenerateCertificate />} />
          <Route path="/generate-certificate/:department/:method" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

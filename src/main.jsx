import react from 'react';
import reactDom from 'react-dom/client';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Form from './Form';

const main = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </div>
    </Router>
  )
}
export default main;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.css'
import LayoutApp from './LayoutApp';
import LoginApp from './LoginApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />} />
        <Route path="/login" element={<LoginApp />} />
      </Routes>
    </Router>
  
  </StrictMode>,
)

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ClassesPage from './pages/ClassesPage/ClassesPage'
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SchedulePage from "./pages/SchedulePage/SchedulePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path="/classes" element={<ClassesPage/>}/>
        <Route path="/schedule" element={<SchedulePage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;

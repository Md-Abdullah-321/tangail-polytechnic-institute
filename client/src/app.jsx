import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/index';
import Contact from './components/contact/index';
import Department from './components/department/index';
import ErrorPage from './components/error/index';
import Footer from './components/footer/index';
import Gallery from './components/gallery/index';
import Home from './components/home/Home';
import Navbar from './components/navbar/index';
import SignIn from './components/signIn/index';
import Signup from './components/signUp/index';
import UserProfile from "./components/userProfile/index";
import './index.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <>
        <Navbar/>
  {/* Routing Path in React  */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />
          <Route path="/department" element={<Department />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/userProfile/index" element={<UserProfile />} />

          {/* If not match, show error  */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </>
  );
}

export default App;

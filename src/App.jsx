// import React from 'react'
// import HomeP from './pages/HomeP';
// import AboutusP from './pages/AboutusP';
// import ServicesP from './pages/ServicesP';
// import ContactP from './pages/ContactP';
// import CalculatorP from './pages/CalculatorP';
// import ProjectsP from './pages/ProjectsP'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
// import Layout from './Layout';
// import Buy from './components/Buy';
// import Sell from './components/Sell';
// import Rent from './components/Rent'
// import Invest from './components/Invest'
// import Residential from './components/Residential';
// import Commercial from './components/Commercial';
// import Plot from './components/Plot';
// import Industrial from './components/industrial';
// import PropertyP from './pages/PropertyP';
// import TestimonialP from './pages/TestimonialP';
// import LoadingScreen from './components/LoadingScreen';

// function App() {
//   const locomotiveScroll = new LocomotiveScroll();

//   return (  
//     <div>
     
//      <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<HomeP />} />
//           <Route path="/Home" element={<HomeP />} />
//           <Route path="/About Us" element={<AboutusP />} />
//           <Route path="/Services" element={<ServicesP />} />
//           <Route path="/Testimonials" element={<TestimonialP />} />
//           <Route path="/buy" element={<Buy />} /> 
//           <Route path="/sell" element={<Sell />} />
//           <Route path="/rent" element={<Rent />} />
//           <Route path="/invest" element={<Invest />} />
//           <Route path="/Contact Us" element={<ContactP />} />
//           <Route path="/Calculators" element={<CalculatorP />} />
//           <Route path="/Projects" element={<ProjectsP />} />
//           <Route path="/residential" element={<Residential />} />
//           <Route path="/commercial" element={<Commercial />} />
//           <Route path="/plot" element={<Plot />} />
//           <Route path="/industrial" element={< Industrial/>} />
//           <Route path="/property/:id" element={<PropertyP />} />
//         </Route>
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;


import React,{useState,useEffect} from 'react'
import HomeP from './pages/HomeP';
import AboutusP from './pages/AboutusP';
import ServicesP from './pages/ServicesP';
import ContactP from './pages/ContactP';
import CalculatorP from './pages/CalculatorP';
import ProjectsP from './pages/ProjectsP'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Layout from './Layout';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Rent from './components/Rent'
import Invest from './components/Invest'
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import Plot from './components/Plot';
import Industrial from './components/Industrial';
import PropertyP from './pages/PropertyP';
import TestimonialP from './pages/TestimonialP';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Simulate an API call or initial setup time
  useEffect(() => {
    setTimeout(() => {
      handleLoadingComplete();
    }, 3000); // Change the delay (3000ms = 3 seconds) as needed
  }, []);

  return (
    <div>
      <Router>
        <ScrollToTop>
        {isLoading ? (
          // Show the LoadingScreen until loading is complete
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          // Once loading is complete, show the main content
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomeP />} />
              <Route path="/Home" element={<HomeP />} />
              <Route path="/About-Us" element={<AboutusP />} />
              <Route path="/Services" element={<ServicesP />} />
              <Route path="/Testimonials" element={<TestimonialP />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/Contact-Us" element={<ContactP />} />
              <Route path="/Calculators" element={<CalculatorP />} />
              <Route path="/Projects" element={<ProjectsP />} />
              <Route path="/residential" element={<Residential />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/plot" element={<Plot />} />
              <Route path="/industrial" element={<Industrial />} />
              <Route path="/property/:id" element={<PropertyP />} />
            </Route>
          </Routes>
        )}
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
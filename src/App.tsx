// import React from 'react';
// import './index.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Footer from './components/Footer';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <Features />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs'; // Create this component
import Team from './components/Team'; // Create this component


const App: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
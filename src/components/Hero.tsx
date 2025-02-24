// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <section className="hero">
//       <h2>Your Partner in Diabetes Management</h2>
//       <p>Track your glucose levels, manage your diet, and stay healthy with MyBete.</p>
//       <button>Get Started</button>
//     </section>
//   );
// }

// export default Hero;

// src/components/Hero.tsx

import React from 'react';
import mobileAppImage from '../assets/mobile-app.png'; // Add your mobile app image in the assets folder

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={mobileAppImage} alt="Mobile Application" className="mobile-app-image" />
        <div className="hero-text">
          <h2>Your Partner in Diabetes Management</h2>
          <p>Track your glucose levels, manage your diet, and stay healthy with MyBete.</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
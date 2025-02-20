import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-blue-100 py-10">
      <h2 className="text-3xl mb-4">Your Partner in Diabetes Management</h2>
      <p className="mb-6">Track your glucose levels, manage your diet, and stay healthy with MyBete.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
    </section>
  );
}

export default Hero;

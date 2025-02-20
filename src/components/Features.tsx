import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features bg-white py-10">
      <h3 className="text-2xl mb-6">Features</h3>
      <ul className="list-disc list-inside">
        <li className="mb-2">Glucose Level Tracking</li>
        <li className="mb-2">Diet Management</li>
        <li className="mb-2">Personalized Insights</li>
        <li className="mb-2">Easy-to-Use Interface</li>
      </ul>
    </section>
  );
}

export default Features;

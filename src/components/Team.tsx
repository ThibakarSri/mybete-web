// src/components/Team.tsx
import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    { name: 'Sanjana', role: 'Full Stack Developer', image: 'https://via.placeholder.com/150' },
    { name: 'Sapna', role: 'Frontend Developer', image: 'https://via.placeholder.com/150' },
    { name: 'Thenujaa', role: 'Full Stack Developer', image: 'https://via.placeholder.com/150' },
    { name: 'Thibakar', role: 'Full Stack Developer', image: 'https://via.placeholder.com/150' },
    { name: 'Nirukshika', role: 'Frontend Developer', image: 'https://via.placeholder.com/150' },
    { name: 'Shaleeka', role: 'Frontend Developer', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section id="team" className="team">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
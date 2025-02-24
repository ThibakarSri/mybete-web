// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header>
//       <h1>MyBete</h1>
//     </header>
//   );
// }

// export default Header;
// src/components/Header.tsx
import React from 'react';
import MenuBar from './MenuBar';

const Header: React.FC = () => {
  return (
    <header>
      <h1>MyBete</h1>
      <MenuBar />
    </header>
  );
}

export default Header;
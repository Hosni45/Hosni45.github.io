import React from 'react';
import avatar from '../assets/me.jpg';
import '../styles/buttons-sideBar.css';

function Sidebar({ setSelectedSection }) {
  return (
    <div className="sidebar" style={{marginTop: '30px', width: '200px', height: '50vh', backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)' }}>
       
      <img src={avatar} alt="avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }} />
      <button onClick={() => setSelectedSection('bio')}>Bio</button>
      <button onClick={() => setSelectedSection('projects')}>Projects</button>
      <button onClick={() => setSelectedSection('portfolio')}>Portfolio</button>
      <button onClick={() => setSelectedSection('contact')}>Contact</button>
    
    </div>
  );
}

export default Sidebar;
import './App.css';
import Sidebar from './component/sidebar';
import { Bio } from './component/Bio';
import { Projects } from './component/Projects';
import { Contact } from './component/Contact';
import { useState } from 'react';
// import nyan from './assets/nyan';
// import nyan2 from './assets/nyanAfro';

function App() {
  const [selectedSection, setSelectedSection] = useState('bio');
  console.log(selectedSection);

  const renderSection = () => {
    switch (selectedSection) {
      case 'bio':
        return <Bio />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Bio />;
    }
  };

  return (
    <div className="background" style={{ display: 'flex', height: '100vh' }} >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            border: 'none',
            borderRadius: '20px',
            opacity: '0.5',
            pointerEvents: 'none'
          }}
          src="https://www.youtube.com/embed/aG01KIXWrbU?autoplay=1&mute=1&controls=0&loop=1&playlist=aG01KIXWrbU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video Background"
        ></iframe>
      <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', zIndex: 1, marginLeft:'130px' }}>
        <Sidebar setSelectedSection={setSelectedSection}  />
      </div>
      <div style={{ marginLeft: '200px', flex: 1 }}>
        {renderSection()}
      </div>
    </div>
  );
}

export default App;

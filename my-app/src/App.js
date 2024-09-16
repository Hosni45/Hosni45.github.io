import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar';
import { Bio } from './component/Bio';
import { Projects } from './component/Projects';
import { Portfolio } from './component/Portfolio';
import { Contact } from './component/Contact';
import { useState } from 'react';

function App() {
  const [selectedSection, setSelectedSection] = useState('bio');
  console.log(selectedSection);
  

  const renderSection = () => {
    switch (selectedSection) {
      case 'bio':
        return <Bio />;
      case 'projects':
        return <Projects />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Bio />;
    }
  };

  return (
    <div className="App" style={{ display: 'flex'}}>
      <Sidebar setSelectedSection={setSelectedSection} />
      <div className="content" style={{ marginLeft: '20px', marginTop: '30px',boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',borderRadius: '20px',width: '70vw',height: '90vh' }}>
        {renderSection()}
      </div>
    </div>
  );
}

export default App;

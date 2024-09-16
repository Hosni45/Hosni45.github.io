import React, { useState } from 'react';

import proj1 from '../assets/app.png';
import proj2 from '../assets/ecom.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 5)',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'white',
    border: 'none',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
    zIndex: 1000,
  },
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ textAlign: 'center' }} onClick={() => handleProjectClick(proj1)}>
        <h3>Mobile App</h3>
        <img
          src={proj1}
          title='Mobile App'
          alt="project 1"
          style={{
            alignItems: 'center',
            width: '40%',
            height: 'auto',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            cursor: 'pointer',
            padding: '10px',
          }}
        />
      </div>

      <div style={{ textAlign: 'center' }} onClick={() => handleProjectClick(proj2)}>
        <h3>E-commerce App</h3>
        <img
          src={proj2}
          title='E-commerce App'
          alt="project 2"
          style={{
            alignItems: 'center',
            width: '40%',
            height: 'auto',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            cursor: 'pointer',
            padding: '10px',
          }}
        />
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedProject === proj1 && (
          <div>
            <h1>Mobile App</h1>
            <p>
              This is a Mobile App for Tnature, an application about logistics
              and distribution where you can see the location of the provider's
              business and the collector's using Expo features, Google APIs for
              map, and Firebase for storage and real-time chat.
            </p>
            <img
              src={proj1}
              alt="project 1"
              style={{
                width: '40%',
                height: 'auto',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '20px',
              }}
            />
          </div>
        )}
        {selectedProject === proj2 && (
          <div>
            <h1>E-commerce App</h1>
            <p>
              This is an E-commerce App for online shopping, featuring a
              user-friendly interface, secure payment options, and real-time
              order tracking.
            </p>
            <img
              src={proj2}
              alt="project 2"
              style={{
                width: '60%',
                height: 'auto',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                borderRadius: '20px',
                cursor: 'pointer',
                padding: '10px',
              }}
            />
          </div>
        )}
        <button onClick={closeModal} style={{ marginTop: '20px' }}>
          Close
        </button>
      </Modal>
    </div>
  );
};
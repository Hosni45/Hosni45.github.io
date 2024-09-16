import React, { useState } from 'react';
import avatar from '../assets/me.jpg';
import '../styles/buttons-sideBar.css';
import '../styles/sidebar.css';
import modal from 'react-modal';

function Sidebar({ setSelectedSection }) {
    const [counter, setCounter] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (counter === 5 && !isModalOpen) {
        setIsModalOpen(true);
    }

    return (
        <>
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(128, 128, 128, 0.212)',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        alignContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <h1>Take-Ten</h1>
                        <div onClick={() => { setCounter(0); setIsModalOpen(false); }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
                        <img src={'https://media.giphy.com/media/QjSoXOQIcEXBu/giphy.gif?cid=ecf05e47uln0r8ix18xtkbi6ciqe6s8dqym6ju7ho1klbzgt&ep=v1_gifs_search&rid=giphy.gif&ct=g'} style={{ width: '40%', height: '40%', borderRadius: '15%' }} alt="nyan" />
                    </div>
                </div>
            )}
            <div className="sidebar">
                <img src={avatar} alt="avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }} onClick={() => setCounter(counter + 1)} />
                <button onClick={() => setSelectedSection('bio')}>Bio</button>
                <button onClick={() => setSelectedSection('projects')}>Projects</button>
                <button onClick={() => setSelectedSection('contact')}>Contact</button>
            </div>
        </>
    );
}

export default Sidebar;
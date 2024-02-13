import { useState } from 'react';

import { Header } from './components/header/header';
import { SideMenu } from './components/side-menu/side-menu';
import { Modal } from './components/modal/modal';

import img1 from './assets/images/black.png';
import img2 from './assets/images/blue.png';
import img3 from './assets/images/green.png';
import img4 from './assets/images/purp.png';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Header onClose={() => setMenuOpen((state) => !state)} />
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen((state) => !state)} />

      <div className="cardsContainer">
        <button className="card" onClick={() => setModalOpen(true)}><img src={img1} alt='text' className="img" /></button>
        <button className="card" onClick={() => setModalOpen(true)}><img src={img2} alt='text' className="img" /></button>
        <button className="card" onClick={() => setModalOpen(true)}><img src={img3} alt='text' className="img" /></button>
        <button className="card" onClick={() => setModalOpen(true)}><img src={img4} alt='text' className="img" /></button>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen((state) => !state)} />
    </div>
  );
}

export default App;

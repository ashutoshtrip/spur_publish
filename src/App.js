import Header from './components/Header/Header';


import Footer from './components/Footer/Footer';
import StoryShare from './components/Share/Share';

import CardCollection from './components/Card/CardCollection';
import Sidebar from './components/Drawer/Sidebar';

import { BrowserRouter as Router} from 'react-router-dom';
import ShareHeader from './components/Share/ShareHeader';
import Modal from './components/Card/Modal/ModalCard';
import {useState} from 'react';



function App() {

  return (
    <div className="App">
      
      <Router >
     < Sidebar />
      </Router>
    <Header / >
      <CardCollection />
      
      <ShareHeader />
     <StoryShare/>
      
    <Footer />
    
    </div>
  )
}

export default App;

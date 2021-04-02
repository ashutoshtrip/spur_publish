import Header from './components/Header/Header';

import "./App.css";
import Footer from './components/Footer/Footer';
import StoryShare from './components/Share/Share';

import CardCollection from './components/Card/CardCollection';
import Sidebar from './components/Drawer/Sidebar';
import Login from './components/Login/Login';

import ShareHeader from './components/Share/ShareHeader';
import Modal from './components/Card/Modal/ModalCard';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link   } from "react-router-dom";
import CardCollectionEng from './components/Card/CardCollectionEng';
import CardCollectionExam from './components/Card/CardCollectionExam';
import CardCollectionMed from './components/Card/CardCollectionMed';
import CardCollectionGov from './components/Card/CardCollectionGov';
function App() {

  return (
    <Router >
    <div className="App">
    <Switch>
    

    <Route path='/eng'>
     <Sidebar />
     <CardCollectionEng />
     <Footer />
    </Route>


    <Route path='/exam'>
     <Sidebar />
     <CardCollectionExam />
     <Footer />
    </Route>

    <Route path='/med'>
     <Sidebar />
     <CardCollectionMed />
     <Footer />
    </Route>

    <Route path='/gov'>
     <Sidebar />
     <CardCollectionGov />
     <Footer />
    </Route>
    <Route path='/login'>
     <Login />
    </Route>


    <Route path='/'>
     <Sidebar />
     <Header />
     <CardCollection />
     <ShareHeader />
     <StoryShare/>
     <Footer />
    </Route>

      </Switch>
     
    </div>
    </Router>
  )
}

export default App;

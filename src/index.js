import React from 'react';
import ReactDOM from 'react-dom';
import PrimarySearchAppBar from './components/Navbar';
import Card from './components/Cards'
import Exam from './components/exam'
// import FunctionalComponent from './components/funcComp'


ReactDOM.render(
  <React.StrictMode>

    <PrimarySearchAppBar />
    <Card/>
    <br/>
    <Exam/>
  </React.StrictMode>,
  document.getElementById('root')
);


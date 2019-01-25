import React, { Component } from 'react';
import marketing from './images/marketing.jpg';
import './MBA.css';

class Marketing extends Component {
  render() {
    return (
      <div>
        <div class='content'>
          <h1><center>Marketing</center></h1>
          <p>Marketing is defined by the American Marketing Association as "the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large."</p><p> The term developed from the original meaning which referred literally to going to market with goods for sale. From a sales process engineering perspective, marketing is "a set of processes that are interconnected and interdependent with other functions" of a business aimed at achieving customer interest and satisfaction</p>
        </div>
        <div class='image'>
         <center> <img src={marketing} className="AppLogo" alt="marketing" /></center>
        </div>

      </div>
    );
  }
}

export default Marketing;

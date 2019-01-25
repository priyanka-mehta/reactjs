import React, { Component } from 'react';
import './MCA.css';
import reactjs from './react-js.png';

class Reactjs extends Component {
  render() {
    return (
      <div>
        <div class='content'>
          <p>
            <strong>Overview</strong><br />
            <p>React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. </p>
            <p>It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.</p>
          </p>
          <p>
            <strong>Advantages</strong><br />
            <p>Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.
          </p>
            <p>Can be used on client and server side as well as with other frameworks.</p>
            <p>Component and data patterns improve readability, which helps to maintain larger apps.</p>
          </p>
        </div>
        <div class='image'>
          <img src={reactjs} className="AppLogo" alt="react-js" />
        </div>
      </div>
    );
  }
}

export default Reactjs;
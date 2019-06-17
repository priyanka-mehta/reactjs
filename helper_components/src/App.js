import React, { Component } from 'react';
import './App.css';

import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './component/Home';
import ImageUpload from './component/ImageUpload/ImageUpload';
import ImageUploadPond from './component/ImageUpload/ImageUploadPond';
import VideoUpload from './component/VideoUpload/VideoUpload';
import AudioUpload from './component/AudioUpload/AudioUpload';
import Signup from './component/Signup';

const url = [
  { to: '/', page: 'Home' },
  { to: '/image-upload-pond', page: 'Image-Upload-React-Pond' },
  { to: '/image-upload', page: 'Image-Upload' },
  { to: '/video-upload', page: 'Video-Upload' },
  { to: '/audio-upload', page: 'Audio-Upload' },
  { to: '/signup', page: 'Signup' }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className='Main'>

          <div className='Header'>
            {url.map((i) =>
              <div id="col-10" key={i.to}>
                <NavLink activeClassName="active" exact to={i.to} > {i.page}</NavLink>
              </div >
            )}
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/image-upload" component={ImageUpload} />
            <Route exact path='/image-upload-pond' component={ImageUploadPond} />
            <Route exact path="/video-upload" component={VideoUpload} />
            <Route exact path="/audio-upload" component={AudioUpload} />
            <Route exact path="/signup" component={() => <Signup />} />
          </Switch>

        </div>
      </Router>
    )
  }
}
export default App;
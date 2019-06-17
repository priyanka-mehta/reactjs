import React, { Component } from 'react';
import { File, onChange } from '../CommonComponent/File';

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    }
  }

  fileSelectedHandler = (e) => {
    let video = onChange(e)
    this.setState({ video: [...this.state.video, ...video] })
  }

  render() {
    const { video } = this.state
    return (
      <center>
        <File
          title='Video'
          accept='video/*'
          onChange={(e) => this.fileSelectedHandler(e.target.files)}
        />
        {(video || []).map((i, key) => {
          return (
            <video
              key={key}
              src={i}
              height='200px'
              width='200px'
              controls
            />)
        })}
      </center>
    )
  }
}
export default VideoUpload;
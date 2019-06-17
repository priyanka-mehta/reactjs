import React, { Component } from 'react';
import { File, onChange } from '../CommonComponent/File';

class AudioUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: ''
    }
  }

  fileSelectedHandler = (e) => {
    let audio = onChange(e)
    this.setState({ audio: [...this.state.audio, ...audio] })
  }

  render() {
    const { audio } = this.state;
    return (
      <center>
        <File
          multiple={false}
          title='Audio'
          accept='audio/*'
          onChange={(e) => this.fileSelectedHandler(e.target.files)}
        />
        {(audio || []).map((i, key) => {
          return (
            <audio
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
export default AudioUpload;
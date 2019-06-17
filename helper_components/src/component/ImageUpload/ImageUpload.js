import React, { Component } from 'react';
import { File, onChange } from '../CommonComponent/File';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  fileSelectedHandler = (e) => {
    let images = onChange(e)
    this.setState({ images: [...this.state.images, ...images] })
  }

  render() {
    const { images } = this.state
    return (
      <center>
        <File
          title='Image'
          accept="image/*"
          onChange={(e) => this.fileSelectedHandler(e.target.files)}
        />
        {(images || []).map((i, key) => {
          return (
            <img
              key={key}
              alt=''
              src={i}
              height='200px'
              width='200px'
            />)
        })}
      </center>
    )
  }
}
export default ImageUpload;
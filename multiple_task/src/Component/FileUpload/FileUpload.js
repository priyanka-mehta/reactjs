import React, { Component } from 'react';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType)

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
      file: null,
      audio: '',
      video: '',
      image: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // this.setState({ [event.target.name]: event.target.files[0] })
    for (let i = 0; i < event.target.files.length; i++) {
      console.log('jlkj')
      let temp = this.state.image.push(event.target.files[i])
      console.log(temp)
      // this.setState({ [event.target.name]: URL.createObjectURL(event.target.files[i]) })
      this.setState({ image: temp })
    }
  }
  // handleChange(event) {
  //   // this.setState({ [event.target.name]: event.target.files[0] })
  //   this.setState({ [event.target.name]: URL.createObjectURL(event.target.files[0]) })
  // }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-3'>
            <FilePond
              files={this.state.files}
              acceptedFileTypes='image/png'
              allowMultiple={true}
              onupdatefiles={fileItems => {
                // Set currently active file objects to this.state
                this.setState({
                  files: fileItems.map(fileItem => fileItem.file)
                });
              }}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-4'>
            <input
              name='image'
              type="file"
              onChange={this.handleChange}
              multiple
            />
          </div>
          <div className='col-4'>
            <input
              name='video'
              type="file"
              onChange={this.handleChange}
            />
          </div>
          <div className='col-4'>
            <input
              name='audio'
              type="file"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <img alt='' src={this.state.image} height='200px' width='200px' />
          </div>
          <div className='col-4'>
            <video src={this.state.video} height='200px' width='200px' controls />
          </div>
          <div className='col-4'>
            <audio src={this.state.audio} height='200px' width='200px' controls />
          </div>
        </div>
      </div >
    )
  }
}
export default FileUpload;

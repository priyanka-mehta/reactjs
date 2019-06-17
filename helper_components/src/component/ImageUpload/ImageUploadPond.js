import React, { Component } from 'react';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType)

class ImageUploadPond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null
    }
  }

  render() {
    console.log(this.state.files)
    return (
      <center >
        <div className='col-3'>
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
      </center>
    )
  }
}
export default ImageUploadPond;
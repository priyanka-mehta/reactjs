import React from 'react';
import PropTypes from 'prop-types';

export const onChange = (e) => {
  let file = Object.values(e).map(i => URL.createObjectURL(i))
  return file;
}

export const File = (props) => {
  return (
    <div>
      <h2>Upload {props.title}</h2>
      <br />
      <input
        multiple={props.multiple}
        type='file'
        name={props.name}
        accept={props.accept}
        onChange={props.onChange}
        className={props.className}
      />
    </div>
  )
}

File.defaultProps = {
  type: 'file',
  multiple: true,
  onChange: () => { }
}

File.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  multiple: PropTypes.bool
}
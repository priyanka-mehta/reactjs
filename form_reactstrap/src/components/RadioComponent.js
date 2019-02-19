import React from 'react';
import PropTypes from 'prop-types';

export const RadioComponent = (props) => {
  return (
    <div>
      {props.radio.map(i => {
        return (
          <div key={i.id}>
            <input
              id={i.id}
              type="radio"
              name={i.name}
              value={i.value}
              onChange={props.onChange}
              onBlur={props.onBlur}
              label={i.label}
            />
            {i.label}
          </div>
        )
      })
      }
    </div>
  );
}

RadioComponent.defaultProps = {
  type: 'radio',
  onChange: null,
}

RadioComponent.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}

export default RadioComponent;
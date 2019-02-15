import React from 'react';
import PropTypes from 'prop-types';

export const CheckboxComponent = (props) => {
  return (
    <div>
      {props.checkbox.map(i => {
        return (
          <div key={i.id}>
            <input
              id={i.id}
              type="checkbox"
              name={i.name}
              value={i.value}
              onChange={props.onChange}
              label={i.label}
            />
            {i.label}
          </div>
        )
      })}
    </div>
  );
}

CheckboxComponent.defaultProps = {
  type: 'checkbox',
  label:'singing',
  onChange: null,
}

CheckboxComponent.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}

export default CheckboxComponent;
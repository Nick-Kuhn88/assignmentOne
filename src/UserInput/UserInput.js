import React from 'react';

const input = (props) => {
  return (
    <div className="input">
      <input type="text" onChange={props.usernameChange} value={props.username}>
      </input>

    </div>
  )
};

export default input;

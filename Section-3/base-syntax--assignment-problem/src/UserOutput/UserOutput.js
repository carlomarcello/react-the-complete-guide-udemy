import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
  const style = {    
    fontStyle: 'italic'    
  };

  return (
    <div className="UserOutput">
      <p style={style}>User output, first paragraph</p>
      <p style={style}>User output, second paragraph</p>
      <p style={style}>Username: {props.username}</p>      
    </div>
  );
};

export default userOutput;
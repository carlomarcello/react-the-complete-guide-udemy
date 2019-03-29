import React from 'react';

const validationComponent = (props) => {

  let validationMsg = 'Text long enough'; 
  if (props.textLength < 5) {
    validationMsg = 'Text too short'; 
  }

  return(
    <p>{validationMsg}</p>
  );
}

export default validationComponent;
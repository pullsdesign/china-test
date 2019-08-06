import React from 'react';
import './Buttons.scss';

function Buttons() {
  return (
    <div className="question-buttons">
      <button>Next</button>
      <button className="gray">Not Sure</button>
      <button className="red">I don’t know</button>
    </div>
  )
}

export default Buttons;

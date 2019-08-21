import React from 'react';
import './Buttons.scss';

function Buttons(props: any) {
  return (
    <div className="question-buttons">
      {/*<button onClick={props.backClick} className="gray">Back</button>*/}
      <button onClick={props.nextClick}>Next</button>
      <button onClick={props.notSureClick} className="gray">Not Sure</button>
      <button onClick={props.dontKnowClick} className="red">I don’t know</button>
    </div>
  )
}

export default Buttons;

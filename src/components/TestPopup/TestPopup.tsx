import React from 'react';
import './TestPopup.scss';
import Incorrect from '../../assets/imgs/incorrect.jpg';
import DontWorry from '../../assets/imgs/icon-i-don-t-know.jpg';

function TestPopup(props: any) {

  if ( !props.popup.shown ) return null;

  return (
    <div className="test-popup">
      <div className="test-popup__content">
        <p className="test-popup__content-text">{props.popup.status === 'error' ? 'Oops...' : 'Don’t worry...'}</p>
        <img src={props.popup.status === 'error' ? Incorrect : DontWorry} alt="face"/>
      </div>
      <div className={props.popup.status === 'error' ? 'test-popup__bar' : 'test-popup__bar --lighter'}>
        {props.popup.status === 'error' ? (<p className="test-popup__bar-title">incorrect</p>) : ''}
        <div className="test-popup__bar-btns">
          {props.currentQuestionNum < 9 ? (
            <button onClick={props.continue}>Continue the test</button>
          ) : ''}
          <button onClick={props.getResult}>Get my results</button>
        </div>
      </div>
    </div>
  )
}

export default TestPopup;

import React from 'react';
import './TextTest.scss';

function TextTest(props: any) {
  return (
    <div className="test-text">
      <div className="test-text__question">
        <p className="test-text__question-title">Which character <b>indicates</b> a question?</p>
      </div>
      <div className="test-text__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">妈</p>
          <p className="test-text__answer-subscr">mā</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">马</p>
          <p className="test-text__answer-subscr">mǎ</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">吗</p>
          <p className="test-text__answer-subscr">mǎ</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">码</p>
          <p className="test-text__answer-subscr">mǎ</p>
        </label>
      </div>
      <div className="test-controls">
        <button onClick={props.onQuestionChange()}>Next</button>
        <button className="shaden">Not Sure</button>
        <button>I don’t know</button>
      </div>
    </div>
  )
}

export default TextTest;

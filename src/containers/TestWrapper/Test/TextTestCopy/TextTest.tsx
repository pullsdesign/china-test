import React from 'react';
import './TextTest.scss';
import Buttons from "../Buttons/Buttons";

function TextTest(props: any) {
  return (
    <div className="test-text">
      <div className="test-text__question">
        <p className="test-text__question-title">Which one is <b>not</b> a past tense marker in Chinese?</p>
      </div>
      <div className="test-text__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">了</p>
          <p className="test-text__answer-subscr">le</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">过</p>
          <p className="test-text__answer-subscr">guò</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">得</p>
          <p className="test-text__answer-subscr">de</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-text__answer-text">以前</p>
          <p className="test-text__answer-subscr">yǐqián</p>
        </label>
      </div>
      <Buttons/>
    </div>
  )
}

export default TextTest;

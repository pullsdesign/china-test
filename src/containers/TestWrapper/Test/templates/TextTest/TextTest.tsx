import React from 'react';
import './TextTest.scss';

import Buttons from '../../Buttons/Buttons';

function TextTest(props: any) {
  return (
    <div className="question-wrapper --text">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title">Which character <b>indicates</b> a question?</p>
      </div>
      <div className="question-wrapper__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">妈</p>
          <p className="question-wrapper__answer-subscr">mā</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">马</p>
          <p className="question-wrapper__answer-subscr">mǎ</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">吗</p>
          <p className="question-wrapper__answer-subscr">mǎ</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">码</p>
          <p className="question-wrapper__answer-subscr">mǎ</p>
        </label>
      </div>
      <Buttons/>
    </div>
  )
}

export default TextTest;

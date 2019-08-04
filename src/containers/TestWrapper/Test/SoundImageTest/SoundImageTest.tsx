import React from 'react';
import './SoundImageTest.scss';

import testImg from '../../../../assets/imgs/image-test.jpg';

function SoundImageTest(props: any) {
  return (
    <div className="test-sound-image">
      <div className="test-sound-image__question">
        <p className="test-sound-image__question-title">The sign goes <b>the most closely</b> with:</p>
        <div className="test-sound-image__question-img">
          <img src={testImg} alt="Img"/>
        </div>
      </div>
      <div className="test-sound-image__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">房地产</p>
          <button className="btn-play test-sound-image__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">公寓</p>
          <button className="btn-play test-sound-image__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">公共建筑</p>
          <button className="btn-play test-sound-image__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">政府大楼</p>
          <button className="btn-play test-sound-image__answer-audio"/>
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

export default SoundImageTest;

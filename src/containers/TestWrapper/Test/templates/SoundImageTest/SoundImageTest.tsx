import React from 'react';
import './SoundImageTest.scss';

import Buttons from '../../Buttons/Buttons';

import testImg from '../../../../../assets/imgs/image-test.jpg';

function SoundImageTest(props: any) {
  return (
    <div className="question-wrapper --sound-image">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title">The sign goes <b>the most closely</b> with:</p>
        <div className="question-wrapper__question-img">
          <img src={testImg} alt="Img"/>
        </div>
      </div>
      <div className="question-wrapper__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">房地产</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">公寓</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">公共建筑</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">政府大楼</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
      </div>
      <Buttons/>
    </div>
  )
}

export default SoundImageTest;

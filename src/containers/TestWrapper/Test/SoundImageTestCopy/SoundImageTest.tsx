import React from 'react';
import './SoundImageTest.scss';

import Buttons from '../Buttons/Buttons';

import testImg from '../../../../assets/imgs/image-05-test.jpg';

function SoundImageTest(props: any) {
  return (
    <div className="test-sound-image">
      <div className="test-sound-image__question">
        <p className="test-sound-image__question-title">The image <b>most closely</b> means:</p>
        <div className="test-sound-image__question-img">
          <img src={testImg} alt="Img"/>
        </div>
      </div>
      <div className="test-sound-image__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">与众不同</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">一门心思</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">一本正经</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-image__answer-text">一切就绪</p>
        </label>
      </div>
      <Buttons/>
    </div>
  )
}

export default SoundImageTest;

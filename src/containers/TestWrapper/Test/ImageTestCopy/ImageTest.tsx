import React from 'react';
import './ImageTest.scss';

import Buttons from '../Buttons/Buttons';

import Image1 from '../../../../assets/imgs/image-01-test.jpg';
import Image2 from '../../../../assets/imgs/image-02-test.jpg';
import Image3 from '../../../../assets/imgs/image-03-test.jpg';
import Image4 from '../../../../assets/imgs/image-04-test.jpg';

function ImageTest(props: any) {
  return (
    <div className="test-image">
      <div className="test-image__question">
        <p className="test-image__question-title">Statement:</p>
        <p className="test-image__question-word">「巴西国家博物馆大火背后：一场并不意外的悲剧」<button className="btn-play"/></p>
        <p className="test-image__question-transcription">Which picture below <b>matches the best</b>?</p>
      </div>
      <div className="test-image__answer">
        <label>
          <input name="test" type="radio"/>
          <img className="full" src={Image1} alt="Image1"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <img className="full" src={Image2} alt="Image2"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <img className="full" src={Image3} alt="Image3"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <img className="full" src={Image4} alt="Image4"/>
        </label>
      </div>
      <Buttons/>
    </div>
  )
}

export default ImageTest;

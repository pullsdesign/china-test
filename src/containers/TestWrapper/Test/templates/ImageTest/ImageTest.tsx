import React from 'react';

import Image1 from '../../../../../assets/imgs/image-01.png';
import Image2 from '../../../../../assets/imgs/layer-23-copy-2.png';
import Image3 from '../../../../../assets/imgs/image-03.png';
import Image4 from '../../../../../assets/imgs/image-04-test.jpg';

function ImageTest(props: any) {
  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title">Which one is <b>the corresponding</b> photo for</p>
        <p className="question-wrapper__question-word"><span>「三点钟」</span><button className="btn-play"/></p>
        <p className="question-wrapper__question-transcription">sāndiǎnzhōng</p>
      </div>
      <div className="question-wrapper__answer">
        <label>
          <input name="test" type="radio"/>
          <img src={Image1} alt="Image1"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <img src={Image2} alt="Image2"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <img src={Image3} alt="Image3"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <img src={Image4} alt="Image4"/>
        </label>
      </div>
    </div>
  )
}

export default ImageTest;

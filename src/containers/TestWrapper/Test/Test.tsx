import React from 'react';
import './Test.scss';

import ImageTest from './templates/ImageTest/ImageTest';
import TextTest from './templates/TextTest/TextTest';
import SoundTextTest from './templates/SoundTextTest/SoundTextTest';
import SoundImageTest from './templates/SoundImageTest/SoundImageTest';
import WordsTest from './templates/WordsTest/WordsTest';

import Result from '../Result/Result';
import Buttons from './Buttons/Buttons';

class Test extends React.Component<any, any> {

  render() {
    return (
      <div className="full-page">
        <WordsTest/>
        <Buttons/>
      </div>
    )
  }
}

export default Test;

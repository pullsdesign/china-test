import React from 'react';

import ImageTest from './ImageTest/ImageTest';
import TextTest from './TextTest/TextTest';
import SoundTextTest from './SoundTextTest/SoundTextTest';
import SoundImageTest from './SoundImageTest/SoundImageTest';
import WordsTest from './WordsTest/WordsTest';

import TextTestCopy from './TextTestCopy/TextTest';
import ImageTestCopy from './ImageTestCopy/ImageTest';
import SoundImageTestCopy from './SoundImageTestCopy/SoundImageTest';
import SoundTextTestCopy from './SoundTextTestCopy/SoundTextTest';
import WordsTestCopy from './WordsTestCopy/WordsTest';

import Result from '../Result/Result';

class Test extends React.Component<any, any> {
  private counter = 1;

  constructor(props: any) {
    super(props);

    this.state = {
      currentQuestion: ImageTest
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    this.counter++;
    switch (this.counter) {
      case 1:
        this.setState({
          currentQuestion: ImageTest
        });
        break;
      case 2:
        this.setState({
          currentQuestion: TextTest
        });
        break;
      case 3:
        this.setState({
          currentQuestion: TextTestCopy
        });
        break;
      case 4:
        this.setState({
          currentQuestion: SoundTextTest
        });
        break;
      case 5:
        this.setState({
          currentQuestion: SoundImageTest
        });
        break;
      case 6:
        this.setState({
          currentQuestion: ImageTestCopy
        });
        break;
      case 7:
        this.setState({
          currentQuestion: WordsTest
        });
        break;
      case 8:
        this.setState({
          currentQuestion: SoundImageTestCopy
        });
        break;
      case 9:
        this.setState({
          currentQuestion: SoundTextTestCopy
        });
        break;
      case 10:
        this.setState({
          currentQuestion: WordsTestCopy
        });
        break;
      case 11:
        this.setState({
          currentQuestion: Result
        });
        break;
      default:
        this.setState({
          currentQuestion: ImageTest
        });
        this.counter = 1;
    }
  }

  render() {
    return (
      <div className="full-page">
        {<this.state.currentQuestion onQuestionChange={() => this.nextQuestion}/>}
      </div>
    )
  }
}

export default Test;

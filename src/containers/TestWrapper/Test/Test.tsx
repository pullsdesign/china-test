import React from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import ImageTest from './ImageTest/ImageTest';
import TextTest from './TextTest/TextTest';
import SoundTextTest from './SoundTextTest/SoundTextTest';
import SoundImageTest from './SoundImageTest/SoundImageTest';
import WordsTest from './WordsTest/WordsTest';

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
          currentQuestion: SoundTextTest
        });
        break;
      case 4:
        this.setState({
          currentQuestion: SoundImageTest
        });
        break;
      case 5:
        this.setState({
          currentQuestion: WordsTest
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
        <ProgressBar/>
        {<this.state.currentQuestion onQuestionChange={() => this.nextQuestion}/>}
      </div>
    )
  }
}

export default Test;

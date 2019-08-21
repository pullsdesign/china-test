import * as React from 'react';
import './TestWrapper.scss'
import {State} from './interfaces';

import StartPage from './StartPage/StartPage';
import Test from './Test/Test';

// import Questions from './Questions/Questions';
import Stub from './Stub/Stub';

export default class TestWrapper extends React.Component<Object, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      testStarted: false,
      showQuestions: false,
      pinyin: false
    };

    this.startTest = this.startTest.bind(this);
    this.goToQuestions = this.goToQuestions.bind(this);
    this.goToStartPage = this.goToStartPage.bind(this);
  }

  startTest(e: any) {
    if ( e.checked ) {
      this.setState({
        testStarted: true,
        pinyin: true
      })
    } else {
      this.setState({
        testStarted: true
      })
    }
  }

  goToQuestions() {
    this.setState({
      showQuestions: true
    });
  }

  goToStartPage() {
    this.setState({
      testStarted: true,
      pinyin: false
    })
  }

  render() {

    // if ( this.state.showQuestions ) return <Questions/>;

    if ( this.state.testStarted && this.state.pinyin ) return <Stub onStartPage={this.goToStartPage} />;

    return (
      <div className="test-wrapper container">
        {
          this.state.testStarted ? <Test/> : <StartPage onStartTest={(e: Event) => this.startTest(e)} onQuestions={this.goToQuestions}/>
        }
      </div>
    )
  }
}

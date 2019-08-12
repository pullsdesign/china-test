import * as React from 'react';
import './TestWrapper.scss'
import {State} from './interfaces';

import StartPage from './StartPage/StartPage';
import Test from './Test/Test';

import Questions from './Questions/Questions';

export default class TestWrapper extends React.Component<Object, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      testStarted: false,
      showQuestions: false
    };

    this.startTest = this.startTest.bind(this);
    this.goToQuestions = this.goToQuestions.bind(this);
  }

  startTest() {
    this.setState({
      testStarted: true
    })
  }

  goToQuestions() {
    this.setState({
      showQuestions: true
    });
  }

  render() {

    if ( this.state.showQuestions ) return <Questions/>;

    return (
      <div className="test-wrapper container">
        {
          this.state.testStarted ? <Test/> : <StartPage onStartTest={this.startTest} onQuestions={this.goToQuestions}/>
        }
      </div>
    )
  }
}

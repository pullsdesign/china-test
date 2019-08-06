import * as React from 'react';
import './TestWrapper.scss'
import {State} from './interfaces';

import StartPage from './StartPage/StartPage';
import Test from './Test/Test';

export default class TestWrapper extends React.Component<Object, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      testStarted: true
    };

    this.startTest = this.startTest.bind(this);
  }

  startTest() {
    this.setState({
      testStarted: true
    })
  }

  render() {
    return (
      <div className="test-wrapper container">
        {
          this.state.testStarted ? <Test/> : <StartPage onStartTest={this.startTest}/>
        }
      </div>
    )
  }
}

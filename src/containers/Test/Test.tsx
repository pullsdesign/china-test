import * as React from 'react';
import './Test.scss'
import {State} from './interfaces';

import StartPage from './StartPage/StartPage';

export default class Test extends React.Component<Object, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      testStarted: false
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
      <div className="test container">
        {
          this.state.testStarted ? <p>test started</p> : <StartPage onStartTest={this.startTest}/>
        }
      </div>
    )
  }
}

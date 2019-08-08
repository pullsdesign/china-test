import React from 'react';
import './Test.scss';

import Requests from '../../../utils/requests';

import ImageTest from './templates/ImageTest/ImageTest';
import TextTest from './templates/TextTest/TextTest';
import SoundTextTest from './templates/SoundTextTest/SoundTextTest';
import SoundImageTest from './templates/SoundImageTest/SoundImageTest';
import WordsTest from './templates/WordsTest/WordsTest';

import Result from '../Result/Result';
import Buttons from './Buttons/Buttons';
import TestPopup from '../../../components/TestPopup/TestPopup';

class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      questions: [],
      currentQuestion: null,
      popup: {
        shown: false,
        status: ''
      }
    };

    this.questionSelected = this.questionSelected.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnNotSureClick = this.btnNotSureClick.bind(this);
    this.btnDontKnowClick = this.btnDontKnowClick.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }

  componentDidMount(): void {
    this.getNextQuestion();
  }

  questionSelected( e: any ) {
    this.setState({
      selectedAnswer: e.target.value
    });
  }

  btnNextClick() {
    if ( !this.state.selectedAnswer ) return false;

    Requests.post('checkAnswer', {questionID: this.state.currentQuestion._id, answerID: this.state.selectedAnswer})
      .then( res => {
        if ( res.data.status ) {
          if ( res.data.data ) {
            this.getNextQuestion();
          } else {
            this.setState({
              popup: {
                shown: true,
                status: 'error'
              }
            })
          }
        } else {
          throw res.data.err;
        }
      }).catch( err => {
        console.error(err);
    })
  }

  btnNotSureClick() {
    this.setState({
      popup: {
        shown: true,
        status: 'not worry'
      }
    })
  }

  btnDontKnowClick() {
    this.setState({
      popup: {
        shown: true,
        status: 'error'
      }
    })
  }

  getNextQuestion() {
    Requests.get('question')
      .then( res => {
        if ( res.data.status ) {
          res.data.data.answers = res.data.data2;
          this.setState({
            questions: [...this.state.questions, res.data.data],
            currentQuestion: res.data.data,
            selectedAnswer: ''
          })
        } else {
          throw res.data.err;
        }
      }).catch( err => {
        console.error(err);
      })
  }

  closePopUp() {
    this.setState({
      popup: {
        shown: false,
        status: ''
      }
    })
  }

  render() {
    let template = null;
    try {
      if ( this.state.currentQuestion ) {
        switch (this.state.currentQuestion.type) {
          case 1:
            template = <ImageTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
            />;
            break;
          case 2:
            template = <SoundImageTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
            />;
            break;
          case 3:
            template = <SoundTextTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
            />;
            break;
          case 4:
            template = <TextTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
            />;
            break;
          case 5:
            template = <WordsTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
            />;
            break;
          default:
            template = <ImageTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
            />;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return (
      <div className="full-page">
        {template}
        <Buttons
          nextClick={this.btnNextClick}
          notSureClick={this.btnNotSureClick}
          dontKnowClick={this.btnDontKnowClick}
        />
        <TestPopup
          popup={this.state.popup}
          closePopUp={this.closePopUp}
        />
      </div>
    )
  }
}

export default Test;

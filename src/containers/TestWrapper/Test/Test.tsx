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
  public answersCounter = {
    total: 0,
    correct: 0
  };

  private existQuestionsIDs: any = [];

  constructor(props: any) {
    super(props);

    this.state = {
      questions: [],
      currentQuestion: null,
      currentLevel: '',
      popup: {
        shown: false,
        status: ''
      },
      showResult: false
    };

    this.questionSelected = this.questionSelected.bind(this);
    this.checkQuestion = this.checkQuestion.bind(this);
    this.continueTheTest = this.continueTheTest.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  componentDidMount(): void {
    this.getBasicQuestions();
  }

  questionSelected( e: any ) {
    this.setState({
      selectedAnswer: e.target.value
    });
  }

  private checkQuestion(clickedBtn: string) {
    if ( !this.state.selectedAnswer ) return false;

    Requests.post('checkAnswer', {questionID: this.state.currentQuestion._id, answerID: this.state.selectedAnswer})
      .then( res => {
        if ( res.data.status ) {
          if ( res.data.data ) {
            this.answersCounter.correct++;
            this.getNextQuestion(this.state.currentLevel ? `level=${this.state.currentLevel}` : '');
          } else {
            if ( clickedBtn === 'notSure' || clickedBtn === 'notKnow' ) {
              this.setState({
                popup: {
                  shown: true,
                  status: 'not worry'
                }
              })
            } else {
              this.setState({
                popup: {
                  shown: true,
                  status: 'error'
                }
              })
            }
          }
        } else {
          throw res.data.err;
        }
      }).catch( err => {
      console.error(err);
    })
  }

  getBasicQuestions() {
    Requests.get('questions')
      .then( res => {
        if ( res.data.status ) {
          this.setState({
            questions: res.data.data,
            currentQuestion: {...res.data.data[0], index: 0},
          });
        } else {
          throw res.data.err;
        }
      }).catch( err => {
      console.error(err);
    });
  }

  getNextQuestion(query?: string) {

    if ( this.answersCounter.total >= 9 ) return this.getResult();

    if ( this.state.currentQuestion && !query ) {
      const questionIndex = this.state.currentQuestion.index;
      this.setState({
        currentQuestion: {...this.state.questions[questionIndex + 1], index: questionIndex + 1},
        selectedAnswer: ''
      });
      this.answersCounter.total++;
    } else {
      Requests.get('question' + (query ? `?${query}` : ''))
        .then( res => {
          if ( res.data.status ) {
            const question: any = res.data.data;

            if ( this.checkIsExistQuestion(question._id) ) {
              this.getNextQuestion(query);
            } else {
              this.existQuestionsIDs.push(question._id);

              question.answers = res.data.data2;

              this.setState({
                currentQuestion: question,
                selectedAnswer: ''
              });
              this.answersCounter.total++;
            }
          } else {
            throw res.data.err;
          }
        }).catch( err => {
        console.error(err);
      });
    }
  }

  continueTheTest() {
    this.setState({
      currentLevel: this.state.currentQuestion.level,
      popup: {
        shown: false,
        status: ''
      }
    }, () => {
      this.getNextQuestion(`level=${this.state.currentLevel}`);
    });
  }

  getResult() {
    this.setState({
      currentLevel: this.state.currentQuestion.level,
      popup: {
        shown: false,
        status: ''
      },
      showResult: true
    })
  }

  private checkIsExistQuestion(questionID: string) {
    return this.existQuestionsIDs.indexOf(questionID) > -1;
  }

  render() {

    if ( this.state.showResult ) return <Result answers={this.answersCounter.correct} result={this.state.currentLevel}/>;

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
          nextClick={() => this.checkQuestion('next')}
          notSureClick={() => this.checkQuestion('notSure')}
          dontKnowClick={() => this.checkQuestion('notKnow')}
        />
        <TestPopup
          popup={this.state.popup}
          continue={this.continueTheTest}
          getResult={this.getResult}
        />
      </div>
    )
  }
}

export default Test;

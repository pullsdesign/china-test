import React from 'react';
import './Test.scss';

import ImageTest from './templates/ImageTest/ImageTest';
import TextTest from './templates/TextTest/TextTest';
import SoundTextTest from './templates/SoundTextTest/SoundTextTest';
import SoundImageTest from './templates/SoundImageTest/SoundImageTest';
import WordsTest from './templates/WordsTest/WordsTest';

import { getBasicQuestions, checkAnswer, getQuestion } from '../../../utils/test.core';

import { Result } from '../Result/Result';
import Buttons from './Buttons/Buttons';
import TestPopup from '../../../components/TestPopup/TestPopup';
import Config from "../../../config";

class Test extends React.Component<any, any> {
  public answersCounter = {
    total: 0,
    correct: 0
  };
  private playingAudio: any;

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
    this.stopAudio();

    if ( !this.state.selectedAnswer ) return false;

    checkAnswer(this.state.currentQuestion._id.$oid, this.state.selectedAnswer)
      .then( valid => {
        if ( valid ) {
          this.answersCounter.correct++;
          this.getNextQuestion(this.state.currentLevel ? this.state.currentLevel : '');
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
      }).catch( err => {
        console.error(err);
      });
  }

  getBasicQuestions() {
    getBasicQuestions()
      .then( questions => {
        this.setState({
          questions: questions,
          // @ts-ignore
          currentQuestion: {...questions[0], index: 0},
        });
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
      getQuestion(query)
        .then( (result: any) => {
          const question: any = result.question;

          if ( this.checkIsExistQuestion(question._id.$oid) ) {
            this.getNextQuestion(query);
          } else {
            this.existQuestionsIDs.push(question._id.$oid);

            question.answers = result.answers;

            this.setState({
              currentQuestion: question,
              selectedAnswer: ''
            });
            this.answersCounter.total++;
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
      this.getNextQuestion(this.state.currentLevel);
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

  playSound(sound: string) {
    if ( !sound ) return false;

    if ( this.playingAudio ) this.stopAudio();

    this.playingAudio = new Audio(Config.PUBLIC_SOUNDS_URL + sound + '?' + Date.now());
    this.playingAudio.play();
  }

  stopAudio() {
    if ( !this.playingAudio ) return false;

    this.playingAudio.pause();
    this.playingAudio = null;
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
              audioPlay={(sound: any) => this.playSound(sound)}
            />;
            break;
          case 2:
            template = <SoundImageTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
              audioPlay={(sound: any) => this.playSound(sound)}
              audioStop={() => this.stopAudio()}
            />;
            break;
          case 3:
            template = <SoundTextTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
              audioPlay={(sound: any) => this.playSound(sound)}
              audioStop={() => this.stopAudio()}
            />;
            break;
          case 4:
            template = <TextTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
              audioPlay={(sound: any) => this.playSound(sound)}
              audioStop={() => this.stopAudio()}
            />;
            break;
          case 5:
            template = <WordsTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
              audioPlay={(sound: any) => this.playSound(sound)}
              audioStop={() => this.stopAudio()}
            />;
            break;
          default:
            template = <ImageTest
              selectHandler={this.questionSelected}
              question={this.state.currentQuestion}
              selectedAnswer={this.state.selectedAnswer}
              audioPlay={(sound: any) => this.playSound(sound)}
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
          backClick={() => this.checkQuestion('back')}
        />
        <TestPopup
          popup={this.state.popup}
          continue={this.continueTheTest}
          getResult={this.getResult}
          currentQuestionNum={this.answersCounter.total}
        />
      </div>
    )
  }
}

export default Test;

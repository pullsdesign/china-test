import React from 'react';
import './WordsTest.scss';
import Config from "../../../../../config";

function WordsTest(props: any) {
  const {question} = props;

  if ( !question ) return null;

  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
        <p className="question-wrapper__question-word">
          <div dangerouslySetInnerHTML={{__html: question.question}}/>
          <button
            onClick={() => playAudio('questionSound', question.sound)}
            className="btn-play"
          />
        </p>
        <audio className="audio" id="questionSound">
          <source src={question.sound ? Config.PUBLIC_SOUNDS_URL + question.sound : ''} type="audio/wav"/>
        </audio>
      </div>
      <div className="question-wrapper__answer">
        {question.answers.map( (answer: any) => (
          <label
            key={answer._id}
            className={props.selectedAnswer === answer._id ? 'active' : ''}
            onMouseOver={() => playAudio(answer._id, answer.sound)}
            onMouseLeave={() => stopAudio(answer._id, answer.sound)}
          >
            <input name="answer" value={answer._id} type="radio" onChange={props.selectHandler}/>
            <p className="question-wrapper__answer-text"><span>{answer.text}</span><br/><span>{answer.subText}</span></p>
            <audio className="audio" id={answer._id}>
              <source src={answer.sound ? Config.PUBLIC_SOUNDS_URL + answer.sound : ''} type="audio/wav"/>
            </audio>
          </label>
        ))}
      </div>
    </div>
  )
}

function playAudio(id: string, sound: string) {
  if ( !sound ) return false;
  const source: any = document.getElementById(id);
  if ( source ) {
    try {
      source.play();
    } catch (e) {
      console.error(e);
    }
  }
}

function stopAudio(id: string, sound: string) {
  if ( !sound ) return false;
  const source: any = document.getElementById(id);
  if ( source ) {
    try {
      source.pause();
      source.currentTime = 0;
    } catch (e) {
      console.error(e);
    }
  }
}

export default WordsTest;

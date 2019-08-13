import React from 'react';

import Config from '../../../../../config';

function ImageTest(props: any) {
  const {question} = props;

  if ( !question ) return null;

  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
        <p className="question-wrapper__question-word">
          <span dangerouslySetInnerHTML={{__html: question.question}}/>
          <button
            onClick={() => playAudio('questionSound', question.sound)}
            className="btn-play"
          />
          <audio className="audio" id="questionSound">
            <source src={question.sound ? Config.PUBLIC_SOUNDS_URL + question.sound : ''} type="audio/wav"/>
          </audio>
        </p>
        <p className="question-wrapper__question-transcription" dangerouslySetInnerHTML={{__html: question.clarification}}/>
      </div>
      <div className="question-wrapper__answer">
        {question.answers.map( (answer: any) => (
          <label key={answer._id} className={props.selectedAnswer === answer._id ? 'active' : ''}>
            <input name="answer" value={answer._id} type="radio" onChange={props.selectHandler}/>
            <img src={Config.PUBLIC_IMGS_URL + answer.img} alt={answer.img}/>
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

export default ImageTest;

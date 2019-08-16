import React from 'react';
import './TextTest.scss';
import Config from "../../../../../config";

function TextTest(props: any) {
  const {question} = props;
  let playingAudio: any;

  if ( !question ) return null;

  const playAudio = (sound: string) => {
    if ( !sound ) return false;

    if ( playingAudio ) stopAudio(sound);

    try {
      playingAudio = new Audio(Config.PUBLIC_SOUNDS_URL + sound + '?' + Date.now());
      playingAudio.play();
    } catch (e) {}
  };

  const stopAudio = (sound: string) => {
    if ( !sound || !playingAudio ) return false;

    try {
      playingAudio.pause();
      playingAudio.currentTime = 0;
      playingAudio = null;
    } catch (e) {}
  };

  return (
    <div className="question-wrapper --text">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
      </div>
      <div className="question-wrapper__answer">
        {question.answers.map( (answer: any) => (
          <label
            key={answer._id}
            className={props.selectedAnswer === answer._id ? 'active' : ''}
            onMouseOver={() => playAudio(answer.sound)}
            onMouseLeave={() => stopAudio(answer.sound)}
          >
            <input name="answer" value={answer._id} type="radio" onChange={props.selectHandler}/>
            <p className="question-wrapper__answer-text">{answer.text}</p>
            <p className="question-wrapper__answer-subscr">{answer.subText}</p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default TextTest;

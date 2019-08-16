import React from 'react';
import './SoundTextTest.scss'
import Config from "../../../../../config";

function SoundTextTest(props: any) {
  const {question} = props;
  let playingAudio: any;

  if ( !question ) return null;

  const playAudio = (sound: string) => {
    if ( !sound || playingAudio ) return false;

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
    <div className="question-wrapper">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
        <p className="question-wrapper__question-word">
          <span dangerouslySetInnerHTML={{__html: question.question}}/>
          <button
            className="btn-play"
            onClick={() => playAudio(question.sound)}
          />
        </p>
        <p className="question-wrapper__question-transcription" dangerouslySetInnerHTML={{__html: question.clarification}}/>
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
            <p className="question-wrapper__answer-text"><span>{answer.text}</span><br/><span>{answer.subText}</span></p>
            {/*<button className="btn-play question-wrapper__answer-audio"/>*/}
          </label>
        ))}
      </div>
    </div>
  )
}

export default SoundTextTest;

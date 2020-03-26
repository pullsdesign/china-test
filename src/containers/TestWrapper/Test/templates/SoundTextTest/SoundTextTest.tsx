import React from 'react';
import './SoundTextTest.scss'

function SoundTextTest(props: any) {
  const {question} = props;

  if ( !question ) return null;

  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question --group">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
        <div>
          <p className="question-wrapper__question-word">
            <span dangerouslySetInnerHTML={{__html: question.question}}/>
            <button
              className="btn-play"
              onClick={() => props.audioPlay(question.sound)}
            />
          </p>
          <p className="question-wrapper__question-transcription" dangerouslySetInnerHTML={{__html: question.clarification}}/>
        </div>
      </div>
      <div className="question-wrapper__answer">
        {question.answers.map( (answer: any) => (
          <label
            key={answer._id.$oid}
            className={props.selectedAnswer === answer._id.$oid ? 'active' : ''}
            onMouseOver={() => props.audioPlay(answer.sound)}
            onMouseLeave={() => props.audioStop(answer.sound)}
          >
            <input name="answer" value={answer._id.$oid} type="radio" onChange={props.selectHandler}/>
            <p className="question-wrapper__answer-text"><span>{answer.text}</span><br/><span>{answer.subText}</span></p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default SoundTextTest;

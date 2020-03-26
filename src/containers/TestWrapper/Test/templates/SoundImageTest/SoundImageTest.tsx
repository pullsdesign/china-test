import React from 'react';
import './SoundImageTest.scss';

import Config from '../../../../../config';

function SoundImageTest(props: any) {
  const {question} = props;

  if ( !question ) return null;

  return (
    <div className="question-wrapper --sound-image">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
        <div className="question-wrapper__question-img">
          <img src={Config.PUBLIC_IMGS_URL + question.img} alt={question.img}/>
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
            <p className="question-wrapper__answer-text">{answer.text}</p>
            <p className="question-wrapper__answer-subtext">{answer.subText}</p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default SoundImageTest;

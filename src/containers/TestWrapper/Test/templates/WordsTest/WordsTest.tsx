import React from 'react';
import './WordsTest.scss';

function WordsTest(props: any) {
  const {question} = props;

  if ( !question ) return null;

  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question --group">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
        <div className="q-wrap">
          <p className="question-wrapper__question-word">
            <div dangerouslySetInnerHTML={{__html: question.question}}/>
          </p>
          <button
            onClick={() => props.audioPlay(question.sound)}
            className="btn-play"
          />
        </div>
      </div>
      <div className="question-wrapper__answer">
        {question.answers.map( (answer: any) => (
          <label
            key={answer._id}
            className={props.selectedAnswer === answer._id ? 'active' : ''}
            onMouseOver={() => props.audioPlay(answer.sound)}
            onMouseLeave={() => props.audioPlay(answer.sound)}
          >
            <input name="answer" value={answer._id} type="radio" onChange={props.selectHandler}/>
            <p className="question-wrapper__answer-text"><span>{answer.text}</span><br/><span>{answer.subText}</span></p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default WordsTest;

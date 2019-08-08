import React from 'react';
import './WordsTest.scss';

function WordsTest(props: any) {
  const {question} = props;

  if ( !question ) return null;

  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title" dangerouslySetInnerHTML={{__html: question.title}}/>
        <p className="question-wrapper__question-word">
          <span dangerouslySetInnerHTML={{__html: question.question}}/><button className="btn-play"/></p>
      </div>
      <div className="question-wrapper__answer">
        {question.answers.map( (answer: any) => (
          <label key={answer._id} className={props.selectedAnswer === answer._id ? 'active' : ''}>
            <input name="answer" value={answer._id} type="radio" onChange={props.selectHandler}/>
            <p className="question-wrapper__answer-text">{answer.text}<br/>{answer.subText}</p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default WordsTest;

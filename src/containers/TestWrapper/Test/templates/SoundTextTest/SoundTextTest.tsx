import React from 'react';
import './SoundTextTest.scss'

function SoundTextTest(props: any) {
  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title">When someone says:</p>
        <p className="question-wrapper__question-word"><span>「我下星期要去看电影。」</span><button className="btn-play"/></p>
        <p className="question-wrapper__question-transcription">Your reply is:</p>
      </div>
      <div className="question-wrapper__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">对，下星期他要去看电影。</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">我也要去看电影，<br />我们一起去吧？</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">你们都可以一起去看电影。</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="question-wrapper__answer-text">电影好不好看？</p>
          <button className="btn-play question-wrapper__answer-audio"/>
        </label>
      </div>
    </div>
  )
}

export default SoundTextTest;

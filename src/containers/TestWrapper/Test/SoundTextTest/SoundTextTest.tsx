import React from 'react';
import './SoundTextTest.scss'
import Buttons from "../Buttons/Buttons";

function SoundTextTest(props: any) {
  return (
    <div className="test-sound-text">
      <div className="test-sound-text__question">
        <p className="test-sound-text__question-title">When someone says:</p>
        <p className="test-sound-text__question-word">「我下星期要去看电影。」<button className="btn-play"/></p>
        <p className="test-sound-text__question-transcription">Your reply is:</p>
      </div>
      <div className="test-sound-text__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text">对，下星期他要去看电影。</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text">我也要去看电影，<br />我们一起去吧？</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text">你们都可以一起去看电影。</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text">电影好不好看？</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
      </div>
      <Buttons/>
    </div>
  )
}

export default SoundTextTest;

import React from 'react';
import './SoundTextTest.scss'

function SoundTextTest(props: any) {
  return (
    <div className="test-sound-text">
      <div className="test-sound-text__question">
        <p className="test-sound-text__question-title">When someone says:</p>
        <p className="test-sound-text__question-word">「人之常情吧，在社会上摸爬滚打久了，自然免不了怀旧一番。」<button className="btn-play"/></p>
        <p className="test-sound-text__question-transcription">Which response is <b>the most fitting</b>?</p>
      </div>
      <div className="test-sound-text__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text">日久生情就是感情<br/>
            慢慢培养起来的，<br/>
            和一见钟情完全不一样。</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text">我是八零后咯，<br/>
            虽然说这么多年都过去了，可当时<br/>
            上小学的情形还历历在目呢！</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text">我要搬回我老家了！<br/>
            这鬼地方我待不下去了！</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-sound-text__answer-text"> 我觉得难度系数最高<br/>
            的难叫左右为难。</p>
          <button className="btn-play test-sound-text__answer-audio"/>
        </label>
      </div>
      <div className="test-controls">
        <button onClick={props.onQuestionChange()}>Next</button>
        <button className="shaden">Not Sure</button>
        <button className="shaden">I don’t know</button>
      </div>
    </div>
  )
}

export default SoundTextTest;

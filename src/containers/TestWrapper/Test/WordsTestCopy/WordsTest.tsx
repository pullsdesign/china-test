import React from 'react';
import './WordsTest.scss';
import Buttons from "../Buttons/Buttons";

function WordsTest(props: any) {
  return (
    <div className="test-words">
      <div className="test-words__question">
        <p className="test-words__question-title">In the passage below, which one is <b>not</b> mentioned?</p>
        <p className="test-words__question-word">「孟夏之日，万物并秀。在这美好时节，来自一百多个国家的各界嘉宾齐聚北京，<br/>
          共商“一带一路”建设合作大计，具有十分重要的意义。<br/>
          今天，群贤毕至，少长咸集，我期待着大家集思广益、畅所欲言，<br/>
          为推动“一带一路”建设献计献策，让这一世纪工程造福各国人民。」<button className="btn-play"/></p>
      </div>
      <div className="test-words__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">First day of summer</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">Beijing</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">With less than 100 country<br/>
            representatives</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">Old and young together</p>
        </label>
      </div>
      <Buttons/>
    </div>
  )
}

export default WordsTest;

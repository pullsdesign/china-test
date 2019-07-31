import React from 'react';
import './WordsTest.scss';

function WordsTest(props: any) {
  return (
    <div className="test-words">
      <div className="test-words__question">
        <p className="test-words__question-title">In the passage below, what <b>new form of technology</b> are they discussing?</p>
        <p className="test-words__question-word">A: 又在到处找手机呢，你的手机怎么就不随身放好呀？<br/>
          B: 就是因为现在到哪里都要用到手机，才会经常不知道手机究竟放在哪里了。<br/>
          A: 是呀，现在我都基本不用现金了，到哪里都是移动支付。移动支付普及是方便，
          可是手机一丢就麻烦了，要冻结各种关联的银行卡账号，就怕被人盗刷。<br/>
          B: 是呀，而且移动支付也不是万能的。上次我去公园，买票只收现金，
          幸好我提前准备了纸币以备不时之需。<button className="btn-play"/></p>
      </div>
      <div className="test-words__answer">
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">Сredit cards</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">Gaming apps</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">Mobile checking accounts</p>
        </label>
        <label>
          <input name="test" type="radio"/>
          <p className="test-words__answer-text">Mobile payment</p>
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

export default WordsTest;

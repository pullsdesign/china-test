import React from 'react';
import './WordsTest.scss';

function WordsTest(props: any) {
  return (
    <div className="question-wrapper">
      <div className="question-wrapper__question">
        <p className="question-wrapper__question-title">In the passage below, what <b>new form of technology</b> are they discussing?</p>
        <p className="question-wrapper__question-word">
          <span>A: 又在到处找手机呢，你的手机怎么就不随身放好呀？<br/>
          B: 就是因为现在到哪里都要用到手机，才会经常不知道手机究竟放在哪里了。<br/>
          A: 是呀，现在我都基本不用现金了，到哪里都是移动支付。移动支付普及是方便，
          可是手机一丢就麻烦了，要冻结各种关联的银行卡账号，就怕被人盗刷。<br/>
          B: 是呀，而且移动支付也不是万能的。上次我去公园，买票只收现金，
          幸好我提前准备了纸币以备不时之需。</span><button className="btn-play"/></p>
      </div>
      <div className="question-wrapper__answer">
        <label>
          <input name="question-wrapper" type="radio"/>
          <p className="question-wrapper__answer-text">Сredit cards</p>
        </label>
        <label>
          <input name="question-wrapper" type="radio"/>
          <p className="question-wrapper__answer-text">Gaming apps</p>
        </label>
        <label>
          <input name="question-wrapper" type="radio"/>
          <p className="question-wrapper__answer-text">Mobile checking accounts</p>
        </label>
        <label>
          <input name="question-wrapper" type="radio"/>
          <p className="question-wrapper__answer-text">Mobile payment</p>
        </label>
      </div>
    </div>
  )
}

export default WordsTest;

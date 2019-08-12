import React from 'react';
import './StartPage.scss';
import {Props} from './interfaces';

import Lighter from '../../../assets/imgs/lighter-icon.png';
import LeftArrowIcon from '../../../assets/imgs/left-arrow.png'

function StartPage(props: Props) {

  return (
    <div className="start-page">
      <p className="start-page__title">Welcome to ChinesePod placement test</p>
      <p className="start-page__subtitle">If you are a learner of traditional characters, please select the
        option below and go to the test. Otherwise, the test will be in simplified format.</p>
      <label className="start-page__option">
        <img src={Lighter} alt="Lighter icon"/>
        <p>I want to use<br/>TRADITIONAL characters</p>
        <input type="checkbox" id="characters"/>
        <span className="start-page__checkbox-immit"/>
      </label>
      <button
        className="start-page__btn"
        onClick={() => props.onStartTest(document.getElementById('characters'))}
      >Go to the test<img src={LeftArrowIcon} alt="Arrow"/></button>
      <button
        className="start-page__btn temporary"
        onClick={() => props.onQuestions()}
      >Show all questions(temporary button)</button>
    </div>
  )
}

export default StartPage;

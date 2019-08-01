import React from 'react';
import './Result.scss';

// import NewbieIcon from '../../../assets/imgs/cpod_level_newbie.svg'
// import ElementaryIcon from '../../../assets/imgs/cpod_level_elementary.svg'
// import PreIntermediateIcon from '../../../assets/imgs/cpod_level_pre-intermediate.svg'
import IntermediateIcon from '../../../assets/imgs/cpod_level_intermediate.svg'
import UpperIntermediateIcon from '../../../assets/imgs/cpod_level_upper-intermediate.svg'
import Advanced from '../../../assets/imgs/cpod_level_advanced.svg'

function Result() {
  return(
    <div className="result">
      <p className="result__title">You are recommended to the <span>Upper Intermediate 100 curriculum</span></p>
      <ul className="result__level">
        <li>
          <img src={IntermediateIcon} alt="Intermediate"/>
          <span>Review the previous level</span>
        </li>
        <li>
          <img src={Advanced} alt="Advanced"/>
          <span>Your recommended level</span>
        </li>
        <li>
          <img src={UpperIntermediateIcon} alt="Upper Intermediate"/>
          <span>Preview the next level</span>
        </li>
      </ul>
    </div>
  )
}

export default Result;

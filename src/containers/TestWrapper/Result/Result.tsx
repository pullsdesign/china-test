import React from 'react';
import './Result.scss';

import NewbieIcon from '../../../assets/imgs/cpod_level_newbie.svg'
import ElementaryIcon from '../../../assets/imgs/cpod_level_elementary.svg'
import PreIntermediateIcon from '../../../assets/imgs/cpod_level_pre-intermediate.svg'
import IntermediateIcon from '../../../assets/imgs/cpod_level_intermediate.svg'
import UpperIntermediateIcon from '../../../assets/imgs/cpod_level_upper-intermediate.svg'
import Advanced from '../../../assets/imgs/cpod_level_advanced.svg'

const icons = [
  {
    level: 'Newbie',
    icon: NewbieIcon
  },
  {
    level: 'Elementary',
    icon: ElementaryIcon
  },
  {
    level: 'Pre Intermediate',
    icon: PreIntermediateIcon
  },
  {
    level: 'Intermediate',
    icon: IntermediateIcon
  },
  {
    level: 'Upper Intermediate',
    icon: UpperIntermediateIcon
  },
  {
    level: 'Advanced',
    icon: Advanced
  }
];

function Result(props: any) {
  console.log(props);
  const styles = {
    bar: {
      width: 10 * props.answers + '%'
    },
    barLabel: {
      left: 10 * props.answers + '%'
    }
  };

  return(
    <div className="result">
      <p className="result__title">You are recommended to the <span>{icons[props.result - 1].level} 100 curriculum</span></p>
      <ul className="result__level">
        <li className={icons[props.result - 2] ? '' : 'hidden'}>
          <img src={icons[props.result - 2] ? icons[props.result - 2].icon : ''} alt="Intermediate"/>
          <span>Review the previous level</span>
        </li>
        <li>
          <img src={icons[props.result - 1].icon} alt="Advanced"/>
          <span>Your recommended level</span>
        </li>
        <li className={icons[props.result] ? '' : 'hidden'}>
          <img src={icons[props.result].icon} alt="Upper Intermediate"/>
          <span>Preview the next level</span>
        </li>
      </ul>
      <div className="result__bar">
        <p className="result__bar-title">Correct answers</p>
        <div className="bar">
          <span className="bar--green" style={styles.bar}/>
          <div className="bar--info" style={styles.barLabel}>
            {props.answers}/10
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;

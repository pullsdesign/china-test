import React from 'react';

import Config from '../../../config';

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
    icon: NewbieIcon,
    pdf: 'newbie.pdf',
  },
  {
    level: 'Elementary',
    icon: ElementaryIcon,
    pdf: 'elementary.pdf',
  },
  {
    level: 'Pre Intermediate',
    icon: PreIntermediateIcon,
    pdf: 'pre-intermediate.pdf',
  },
  {
    level: 'Intermediate',
    icon: IntermediateIcon,
    pdf: 'intermediate.pdf',
  },
  {
    level: 'Upper Intermediate',
    icon: UpperIntermediateIcon,
    pdf: 'upper-intermediate.pdf',
  },
  {
    level: 'Advanced',
    icon: Advanced,
    pdf: 'advanced.pdf',
  }
];

export const Result = (props: any) => {
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
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a target="_blank" href={icons[props.result - 2] ? Config.PUBLIC_DOCS_URL + icons[props.result - 2].pdf : '#'}>
            <img src={icons[props.result - 2] ? icons[props.result - 2].icon : ''} alt="Lvl"/>
          </a>
          <span>Review the previous level</span>
        </li>
        <li>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a target="_blank" href={icons[props.result - 1] ? Config.PUBLIC_DOCS_URL + icons[props.result - 1].pdf : '#'}>
            <img src={icons[props.result - 1].icon} alt="Lvl"/>
          </a>
          <span>Your recommended level</span>
        </li>
        <li className={icons[props.result] ? '' : 'hidden'}>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a target="_blank" href={icons[props.result] ? Config.PUBLIC_DOCS_URL + icons[props.result].pdf : '#'}>
            <img src={icons[props.result] ? icons[props.result].icon : ''} alt="Lvl"/>
          </a>
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
};

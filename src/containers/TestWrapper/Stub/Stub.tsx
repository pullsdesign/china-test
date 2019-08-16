import React from 'react';
import './Stub.scss';
import LeftArrowIcon from "../../../assets/imgs/left-arrow.png";

export default function Stub(props: any) {
  return (
    <div className="stub-page">
      <p className="stub-page__title">Sorry! This page is still under construction.</p>
      <button className="stub-page__btn" onClick={props.onStartPage}>
        <img src={LeftArrowIcon} alt="Arrow"/>Continue with simplified format
      </button>
    </div>
  )
}

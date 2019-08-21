import React from 'react';
import './Stub.scss';

export default function Stub(props: any) {
  return (
    <div className="stub-page">
      <p className="stub-page__title">Sorry! This page is still under construction.</p>
      <button className="stub-page__btn" onClick={props.onStartPage}>
        Continue with simplified format
      </button>
    </div>
  )
}

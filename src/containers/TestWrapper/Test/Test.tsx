import React from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import ImageTest from './ImageTest/ImageTest';

class Test extends React.Component {
  render() {
    return (
      <div className="full-page">
        <ProgressBar/>
        <ImageTest/>
      </div>
    )
  }
}

export default Test;

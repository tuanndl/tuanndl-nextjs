import React from 'react';
import Skeleton from 'react-skeleton-loader';
import styleInput from "./index.scss";

const LoadingInput = () => {
  return (
    <div className={ styleInput.main }>
      <p className={ styleInput.label }><Skeleton height='20px' width='30%' widthRandomness={0} /></p>
      <div><Skeleton height='20px' width='100%' widthRandomness={0} /></div>
    </div>  );
};

export default LoadingInput;
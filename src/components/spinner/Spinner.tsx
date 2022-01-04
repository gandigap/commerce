import React from 'react';

import styled from 'styled-components';

const SpinnerContainer = styled.div`
  text-align: center;
  .ldio-a44nd6knfmr div {
    box-sizing: content-box;
  }

  @keyframes ldio-a44nd6knfmr-o {
    0% {
      opacity: 1;
      transform: translate(0 0);
    }
    49.99% {
      opacity: 1;
      transform: translate(80px, 0);
    }
    50% {
      opacity: 0;
      transform: translate(80px, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }
  @keyframes ldio-a44nd6knfmr {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(80px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .ldio-a44nd6knfmr div {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 60px;
    left: 20px;
  }
  .ldio-a44nd6knfmr div:nth-child(1) {
    background: var(--color-3);
    animation: ldio-a44nd6knfmr 1s linear infinite;
    animation-delay: -0.5s;
  }
  .ldio-a44nd6knfmr div:nth-child(2) {
    background: var(--color-1);
    animation: ldio-a44nd6knfmr 1s linear infinite;
    animation-delay: 0s;
  }
  .ldio-a44nd6knfmr div:nth-child(3) {
    background: var(--color-4);
    animation: ldio-a44nd6knfmr-o 1s linear infinite;
    animation-delay: -0.5s;
  }
  .loadingio-spinner-dual-ball-2cuta6hl4f1 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-a44nd6knfmr {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="loadingio-spinner-dual-ball-2cuta6hl4f1">
        <div className="ldio-a44nd6knfmr">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;

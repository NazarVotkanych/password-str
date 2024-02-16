import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStr = ({ password }) => {

  const testR = zxcvbn(password);

  const number = testR.score * 100 / 4;

  const progressName = () => {
    switch(testR.score) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fear';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  } 

  const funcProgress = () => {
    switch(testR.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  } 

  const changeColor = () => ({
    width: `${number}%`,
    background: funcProgress(),
    height: '7px'
  })
  return (
    <>
      <div className='progress' style={{ height: '7px'}}>
        <div className='progress-bar' style={changeColor()}></div>
      </div>
      <p style={{ color: funcProgress() }} className='d-flex justify-content-end'>{progressName()}</p>    
    </>
  )
}

export default PasswordStr
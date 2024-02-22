import React from 'react';
import { calculateScore } from '../utils/passwordUtils.tsx';
import { ColorMap, PasswordStrength } from '../enums/StrengthConstants.ts';

interface PasswordStrProps {
  password: string;
}

export const PasswordStr: React.FC<PasswordStrProps> = ({ password }) => {

  const score: number = calculateScore(password);

  const progressName = () => {
    switch (score) {
      case PasswordStrength.VERY_WEAK:
        return 'Very Weak';
      case PasswordStrength.WEAK:
        return 'Weak';
      case PasswordStrength.FAIR:
        return 'Fair';
      case PasswordStrength.GOOD:
        return 'Good';
      case PasswordStrength.STRONG:
        return 'Strong';
      default:
        return '';
    }
  };

  const changeColor = () => ({
    width: `${score * 25}%`,
    background: ColorMap[score],
    height: '7px',
  });

  return (
    <>
      <div className='progress' style={{ height: '7px' }}>
        <div className='progress-bar' style={changeColor()}></div>
      </div>
      <p style={{ color: ColorMap[score] }} className='d-flex justify-content-end'>{progressName()}</p>
    </>
  );
};

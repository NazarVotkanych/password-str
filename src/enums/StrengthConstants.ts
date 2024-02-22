const PasswordStrength = {
  VERY_WEAK: 0,
  WEAK: 1,
  FAIR: 2,
  GOOD: 3,
  STRONG: 4,
};

const ColorMap = {
  [PasswordStrength.VERY_WEAK]: '#828282',
  [PasswordStrength.WEAK]: '#EA1111',
  [PasswordStrength.FAIR]: '#FFAD00',
  [PasswordStrength.GOOD]: '#9bc158',
  [PasswordStrength.STRONG]: '#00b500',
};

export { PasswordStrength, ColorMap };
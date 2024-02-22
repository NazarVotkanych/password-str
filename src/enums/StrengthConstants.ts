const PasswordStrength = {
  VERY_WEAK: 0,
  WEAK: 1,
  EASY: 2,
  MEDIUM: 3,
  STRONG: 4,
};

const ColorMap = {
  [PasswordStrength.VERY_WEAK]: '#828282',
  [PasswordStrength.WEAK]: '#EA1111',
  [PasswordStrength.EASY]: '#EA1111',
  [PasswordStrength.MEDIUM]: '#FFAD00',
  [PasswordStrength.STRONG]: '#00b500',
};

export { PasswordStrength, ColorMap };
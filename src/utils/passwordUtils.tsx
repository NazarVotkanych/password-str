const calculateScore = (password: string): number => {
  if (password.length < 4) {
    return 0;
  } else if (password.length < 8) {
    return 1;
  } else if (password.match(/[a-zA-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z0-9]/)) {
    return 4;
  } else if (password.match(/[a-zA-Z]/) && password.match(/[0-9]/)) {
    return 3;
  } else {
    return 2;
  }
};

export { calculateScore };

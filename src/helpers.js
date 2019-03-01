export const calculate = str => {
  if (/x/g.test(str)) {
    str = str.replace(/x/g, '*');
  }
  if (/÷/g.test(str)) {
    str = str.replace(/÷/g, '/');
  }
  try {
    return eval(str);
  } catch {
    return 'ERROR';
  }
};

export const deleteLastChar = input => {
  input = input.toString();
  if (input.length === 1) {
    return '0';
  } else {
    return input.substring(0, input.length - 1);
  }
};

export const getSquareRoot = num => {
  let sqrt = Math.sqrt(num);
  if (isNaN(sqrt)) {
    return 'ERROR';
  } else {
    return sqrt;
  }
};

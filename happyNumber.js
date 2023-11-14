const isHappy = function (n) {
  const splitedN = String(n).split("");

  let res = splitedN.reduce((acc, cur) => {
    return (acc = acc + Math.pow(+cur, 2));
  }, 0);

  if (res === 1) {
    return true;
  } else if (res === 4) {
    // if the number is not happy it will be always looping on 4
    return false;
  } else {
    return isHappy(res);
  }
};

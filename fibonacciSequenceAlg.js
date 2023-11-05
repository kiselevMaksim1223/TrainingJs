const fibonacci = (n) => {
  const res = [0, 1];
  if (n === 0) {
    return (res = [0]);
  }

  if (n === 1) {
    return (res = [0, 1]);
  }

  for (let i = 2; i < n; i++) {
    res.push(res[i - 2] + res[i - 1]);
  }

  return res;
};

console.log(fibonacci(6)); // [0, 1, 1]

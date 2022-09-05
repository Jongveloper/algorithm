/* eslint-disable no-param-reassign */
const fibo = (x) => {
  if (x === 1 || x === 2) {
    return 1;
  }
  return fibo(x - 1) + fibo(x - 2);
};

const fibo2 = (number) => {
  const DP = [0, 1];

  for (let i = 1; i < number; i += 1) {
    DP[i + 1] = DP[i] + DP[i - 1];
  }

  return DP[number];
};

describe('피보나치', () => {
  it('값이 출력됩니다', () => {
    expect(fibo(4)).toBe(3);
    console.time('fibo');
    expect(fibo(35)).toBe(9227465);
    console.timeEnd('fibo');
    console.time('fibo2');
    expect(fibo2(35)).toBe(9227465);
    console.timeEnd('fibo2');
  });
});

/* eslint-disable prettier/prettier */
/**
 * 미지의 것
 * - 세로의 길이가 2이고 가로의길이가 n인 바닥을 채울 때 채울 수 있는 경우의 수
 * 자료
 * - 가로의 길이가 2이고 세로의 길이가 1인 직사각형 모양의 타일이 있다.
 * 조건
 * - 가로의 길이 n은 60,000이하의 자연수입니다
 * - 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return합니다.
 * 계획
 * -
 */

const run = (n) => {
  let answer = 0;
  let a = 2; let b = 1;
  for(let i = 2; i < n; i += 1){
      answer = (a + b) % 1000000007;
      b = a;
      a = answer;
  }
  return answer;
};

describe('2 x n 타일링', () => {
  it('경우의 수를 1,000,000,007으로 나눈 나머지를 return 한다.', () => {
    expect(run(4)).toBe(5);
  });
});

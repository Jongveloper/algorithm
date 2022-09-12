/**
 * 미지의 것
 * - s가 1이 될 때까지 계속해서 s에 이진변환을 했을 때 이진 변환의 횟수와 제거된 0의 개수
 * 자료
 * - 0을 제거한 것을 반복문을 통해 카운트할 수 있다.
 * - x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꾼다.
 *
 * 조건
 *
 * 계획
 * - str의 0을 카운트한다. (split('0').length - 1)
 * - str의 0을 제거한다.
 * - 0을 제거한 길이를 이진 변환한다.
 * - 1이 될 때까지 반복한다.
 *
 * 반성
 * 어려운 문제가 아닌데 문제를 처음에 접근을 잘못했습니다.
 * 이진 변환을 하는게 0을 제거한 문자열의 길이를 이진 변환을 해야하는데
 * 이 부분을 잘 숙지하지 않고 문제를 풀어서
 * 원하던 결과를 못 얻어내고 있었습니다.
 * 문제를 잘 읽어야겠습니다!
 */

// 재귀
// const solution = (str, zero = 0, count = 0) => {
//   if (str === '1') {
//     return [count, zero];
//   }

//   const newStr = str.split('0').join('').length.toString(2);

//   return solution(newStr, zero + str.split('0').length - 1, count + 1);
// };

// while
const solution = (str) => {
  let copyStr = str;
  let zero = 0;
  let count = 0;

  while (copyStr !== '1') {
    zero += copyStr.split('0').length - 1;
    copyStr = copyStr.split('0').join('').length.toString(2);
    count += 1;
  }

  return [count, zero];
};

describe('이진 변환 반복하기', () => {
  it('s가 1이 될 때까지 계속해서 s에 이진변환을 했을 때 이진 변환의 횟수와 제거된 0의 개수를 리턴한다.', () => {
    expect(solution('110010101001')).toEqual([3, 8]);
  });
});

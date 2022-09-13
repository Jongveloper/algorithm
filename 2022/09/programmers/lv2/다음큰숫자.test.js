/**
 * 미지의 것
 * - n의 다음 큰 숫자
 * 자료
 * - n의 다음 큰 숫자는 n보다 큰 자연수이다.
 * - n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다.
 * - n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수이다.
 *
 * - toString(2)를 사용하면 이진법으로 변환할 수 있다.
 * - split을 사용하면 1만 남길 수 있다.
 * - 문자의 길이를 알아낼 수 있다.
 * 조건
 *
 * 계획
 * - n을 이진법으로 변환한 변수를 만든다.
 * - 이진법으로 변환한 n에서 0을 제거한다.
 * - n에서 1을 증가시킨 변수를 만든다.
 * - n에서 1을 증가시킨 변수를 이진법으로 변환한다.
 * - 이진법으로 변환한 수에서 0을 제거한다.
 * 반성
 * 자료를 찾을 때, 0을 제거하는 부분을 어떻게 하면 좋을까 생각했는데
 * split이 바로 떠오르지 않았습니다.
 * split이 떠오르고 바로 적용했지만
 * 문제를 많이 풀어서 사용하기 좋은 메서드들을 바로바로 떠올릴 수 있게끔 해야겠습니다.
 */

// 재귀
// const solution = (n, result = n + 1) => {
//   const binaryN = n.toString(2).split('0').join('');
//   const binaryResult = result.toString(2).split('0').join('');

//   if (binaryN.length === binaryResult.length) {
//     return result;
//   }

//   return solution(n, result + 1);
// };

// while
const solution = (n) => {
  const binaryN = n.toString(2).split('0').join('');

  let result = n + 1;

  let binaryResult = result.toString(2).split('0').join('');

  while (binaryN.length !== binaryResult.length) {
    result += 1;

    binaryResult = result.toString(2).split('0').join('');
  }

  return result;
};

describe('다음 큰 숫자', () => {
  it('n의 다음 큰 숫자를 리턴합니다.', () => {
    expect(solution(78)).toBe(83);
  });
});

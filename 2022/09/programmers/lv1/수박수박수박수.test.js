/**
 * 미지의 것
 * 문자열
 *
 * 자료
 * 홀수이면 수 짝수이면 박을 더한다.
 *
 * 조건
 * n은 길이 10,000이하의 자연수이다.
 *
 * 계획
 * 1. solution(number, count=0, word='') 재귀함수를 만든다.
 * 2. count === n이면 word를 리턴한다.
 * 3. count % 2 === 0이면 solution(n, count + 1, word + '수')
 *    count % 2 !== 0이면 solution(n, count + 1, word + '박')
 *
 *
 *
 * 반성
 * 코드를 작성할 때마다 머릿속으로 검증을 해야하는데
 * 이 부분이 아직 미흡한 것 같다.
 * 코드의 결과로 결과를 검증하려하니 가끔씩 꼬일 때가 있는 것 같다
 * 유의해서 코드를 작성해야겠다.
 */

// 재귀
// const solution = (number, count = 0, word = '') => {
//   if (count === number) {
//     return word;
//   }

//   if (count % 2 === 0) {
//     return solution(number, count + 1, `${word}수`);
//   }

//   if (count % 2 !== 0) {
//     return solution(number, count + 1, `${word}박`);
//   }

//   return -1;
// };

// while
// const solution = (number) => {
//   let count = 0;
//   let word = '';
//   while (count < number) {
//     if (count % 2 === 0) {
//       word += `수`;
//       count += 1;
//     } else {
//       word += `박`;
//       count += 1;
//     }
//   }

//   return word;
// };

// for
const solution = (number) => {
  let word = '';
  for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
      word += '수';
    } else {
      word += '박';
    }
  }

  return word;
};

describe('수박수박수박수?', () => {
  it('문자열이 완성됩니다.', () => {
    expect(solution(3)).toBe('수박수');
    expect(solution(4)).toBe('수박수박');
  });
});

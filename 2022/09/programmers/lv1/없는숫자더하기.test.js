/**
 * 미지의 것
 * - 없는 숫자를 더한 값
 *
 * 자료
 * - 반복문을 통해서 없는 숫자를 찾아낼 수 있다.
 * - 0부터 9까지의 숫자이므로 반복문은 0~9까지만 돌면 된다.
 *
 * 조건
 * 1 <= numbers <= 9
 * numbers의 원소는 서로 모두 다르다.
 * 계획
 * 1. sum변수를 만들고 0을 할당한다
 * 2. 0~9까지 반복문을 돌며 includes 함수를 통해 없는 숫자를 가려내고
 * 없는 숫자를 만나면 sum 에 누적한다.
 * 3. sum을 리턴한다.
 * 반성
 * 자료와 조건을 통해 0부터 9까지 밖에 없고
 * 원소가 서로 모두 다르다는 것을 알았음에도
 * 0~9의 모든 합산인 45 - numbers의 모든 합산을
 * 처음부터 생각해내지 못했습니다...
 * 자료와 조건을 통해 문제를 분석하는 능력을 길러야겠습니다.
 */

// const solution = (numbers) => {
//   let sum = 0;

//   for (let i = 0; i < 10; i += 1) {
//     if (!numbers.includes(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// };

const solution = (numbers) => {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
};

describe('없는 숫자 더하기', () => {
  it('없는 숫자를 더한 값이 리턴됩니다.', () => {
    expect(solution([1, 2, 3, 4, 6, 7, 8, 0])).toBe(14);
  });
});

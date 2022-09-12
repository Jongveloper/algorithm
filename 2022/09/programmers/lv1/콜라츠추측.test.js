/* eslint-disable no-param-reassign */
/**
 * 미지의 것
 * 주어진 수가 1이 될 때 까지 반복한 횟수
 *
 * 자료
 * 입력된 수가 짝수라면 2로 나누고 홀수라면 3을 곱하고 1을 더한다.
 * 결과가 1이 될 때 까지 반복한다.
 *
 * 조건
 * count가 500이 넘어가면 -1을 반환한다.
 * num은 1이상 8,000,000 미만인 정수이다.
 *
 * 계획
 * 콜라츠 재귀함수를 만들고
 * count > 500 이라면 -1을 반환하고
 * num === 1이 되면 count를 반환하는 재귀함수를 만든다.
 *
 * 반성
 */

// 재귀
// const collatz = (num, count = 0) => {
//   if (count > 500) {
//     return -1;
//   }

//   if (num === 1) {
//     return count;
//   }

//   if (num % 2 === 0) {
//     num /= 2;
//     count += 1;
//   } else {
//     num = num * 3 + 1;
//     count += 1;
//   }
//   return collatz(num, count);
// };

// while
const collatz = (num) => {
  let count = 0;

  while (num !== 1) {
    if (count > 500) {
      return -1;
    }

    if (num % 2 === 0) {
      count += 1;
      num /= 2;
    } else {
      num = num * 3 + 1;
      count += 1;
    }
  }

  return count;
};

describe('콜라츠 추측', () => {
  it('1이 되기까지 몇 번 반복되었는지 count가 출력됩니다.', () => {
    expect(collatz(6)).toBe(8);
  });
});

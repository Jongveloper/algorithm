/**
 * 미지의 것
 * 정수 n을 입력받아 n의 약수를 모두 더한 값
 *
 * 자료
 * 약수 : 12 % n === 0 이 될 때, n의 값
 * 반복문을 통해 12까지 숫자를 모두 나눠볼 수 있다.
 *
 * 조건
 * n은 0 이상 3000이하인 정수이다.
 * 계획
 * 1. solution(number, target=1 ,divisor=[]) 을 만든다.
 * 2. 만약 target > number면 divisor.reduce((acc,cur) => acc+cur, 0)을 리턴한다.
 * 3. number % target === 0이라면 divisor.push(target)
 *
 * 반성
 * 재귀를 풀 때, 배열에 굳이 넣어서 reduce를 하지 않아도 되었음에도 불구하고,
 * 습관적으로 배열을 만들어서 reduce를 사용했습니다.
 * while로 하면서 이 부분을 깨닫고 리팩토링을 진행하였습니다.
 * 손에 익은 방법만 사용하려고 하는 습관을 고쳐야할 것 같습니다.
 */

// 재귀
const solution = (number, target = 1, sum = 0) => {
  if (target > number) {
    return sum;
  }

  if (number % target === 0) {
    return solution(number, target + 1, sum + target);
  }

  return solution(number, target + 1, sum);
};

// while
// const solution = (number) => {
//   let target = 1;
//   let sum = 0;

//   while (target <= number) {
//     if (number % target === 0) {
//       sum += target;
//     }

//     target += 1;
//   }

//   return sum;
// };

describe('약수의 합', () => {
  it('약수의 합을 리턴합니다.', () => {
    expect(solution(12)).toBe(28);
  });
});

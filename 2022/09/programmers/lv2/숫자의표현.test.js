/**
 * 미지의 것
 * - 연속된 자연수들로 n을 표현하는 방법의 수
 * 자료
 * - 배열을 사용하고 배열의 앞부분을 제거하면 하나씩 제거된 수를 더할 수 있다.
 * - reduce를 사용하여 배열의 합을 구할 수 있다.
 *
 * 조건
 * - n은 10,000이하의 자연수이다.
 * 계획
 * 1. 재귀함수의 인자로 1부터 n까지의 숫자가 담긴 배열을 만든다.
 * 2. 숫자 배열의 첫 번째 원소를 sum배열에 넣는다.
 * 3. sum배열의 합을 구하고 합이 n이라면 way +=1을 한 후 배열을 비워준다.
 * 4. 숫자 배열의 첫 번째 원소가 n일 때까지 반복한다.
 *
 * 반성
 */

// const solution = (
//   n,
//   numbers = Array.from({ length: n }, (_, i) => i + 1),
//   sum = [],
//   way = 0,
// ) => {
//   if (numbers[0] === n) {
//     return way + 1;
//   }

//   const cumulative = sum.reduce((acc, cur) => Number(acc) + Number(cur), 0);

//   if (cumulative > n) {
//     sum.splice(0, 1);

//     return solution(n, numbers, sum, way);
//   }

//   sum.push(numbers.splice(0, 1));

//   if (cumulative === n) {
//     sum.splice(0, 1);
//     return solution(n, numbers, sum, way + 1);
//   }

//   return solution(n, numbers, sum, way);
// };

const solution = (n) => {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  let way = 0;
  const sum = [];

  while (numbers[0] !== n) {
    const cumulative = sum.reduce((acc, cur) => Number(acc) + Number(cur), 0);

    if (cumulative > n) {
      sum.splice(0, 1);
    } else {
      sum.push(numbers.splice(0, 1));
    }

    if (cumulative === n) {
      sum.splice(0, 1);
      way += 1;
    }
  }

  return way + 1;
};

describe('숫자의 표현', () => {
  it('연속된 자연수들로 n을 표현하는 방법의 수', () => {
    expect(solution(15)).toBe(4);
  });
});

/**
 * 미지의 것
 * - n이하의 짝수를 모두 더한 값
 * 자료
 * - 2로 나눈 나머지가 0이면 짝수이다.
 * 조건
 * - 0 < n <= 1000
 * 계획
 * - 짝수 배열을 return하는 함수를 만든다.
 *   - n만큼 반복문을 돌며 2로 나눈 나머지가 0인 수를 배열에 넣어준다.
 * - 짝수 배열을 reduce를 통해 값을 모두 더한 후 return한다.
 *
 * - 모든 값을 합하는 함수를 만든다.
 * 반성
 *
 */

const sum = (arr = []) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i += 1) {
    answer += arr[i];
  }

  return answer;
};

const even = (n = 0) => {
  const evens = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
};

const solution = (n = 0) => {
  return sum(even(n));
};

describe('짝수의 합', () => {
  it('n이하의 짝수들의 합을 리턴합니다.', () => {
    expect(solution(10)).toBe(30);
  });
});

describe('even', () => {
  it('짝수 배열을 리턴합니다.', () => {
    expect(even(10)).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('sum', () => {
  it('모든 값을 더한 값을 리턴합니다.', () => {
    expect(sum([2, 4, 6, 8, 10])).toBe(30);
  });
});

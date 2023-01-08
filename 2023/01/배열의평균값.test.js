/**
 * 미지의 것
 * - 배열의 평균 값
 * 자료
 * - 배열을 모두 더한 후 / 배열의 길이를 하면 평균을 구할 수 있다.
 * 조건
 * - 0 ≤ numbers의 원소 ≤ 1,000
 * - 1 ≤ numbers의 길이 ≤ 100
 * 계획
 * - 배열을 모두 더한 값을 리턴하는 함수를 만든다.
 * - 배열을 모두 더한 값을 배열의 길이만큼 나눈 값을 리턴한다.
 *
 * - reduce를 통해 배열의 누적 합을 구한 뒤 배열의 길이만큼 나눈 값을 리턴한다.
 */

const sum = (numbers = []) => {
  let answer = 0;

  numbers.forEach((i) => {
    answer += i;
  });

  return answer;
};

const solution = (numbers = []) => {
  // return sum(numbers) / numbers.length;
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
};

describe('배열의 평균 값', () => {
  it('배열의 평균 값이 리턴됩니다.', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
    expect(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])).toBe(94.0);
  });
});

describe('sum', () => {
  it('배열을 모두 더한 값을 리턴합니다.', () => {
    expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  });
});

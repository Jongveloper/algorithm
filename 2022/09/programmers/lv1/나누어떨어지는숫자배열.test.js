/**
 * 미지의 것
 * 주어지는 배열의 요소 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열
 *
 * 자료
 * filter 사용하면 구해야하는 조건에 맞는 새로운 배열을 반환할 수 있다.
 * 만약, divisor로 나뉘어지는 것이 없다면 [-1]을 반환한다.
 *
 * 조건
 * arr은 자연수를 담은 배열이다.
 * divisor는 자연수이다.
 * array는 길이 1 이상인 배열이다.
 *
 * 계획
 * sortedArray를 선언하고 주어진느 배열을 정렬한 값을 할당한다.
 * sortedArray의 요소를 하나씩 탐색하며 divisor로 나뉘어지는 값만 담는다.
 *
 * 반성
 * 이번에도 문제의 예외 케이스를 고려하지 않아
 * 코드를 수정했다.
 * 또한, 고차 함수의 특성이 다 다른데 잘못된 접근으로
 * 처음에 map을 사용하려 했다....!
 * 잘못된 부분을 알고 바로 filter로 변경하였지만
 * 다음부턴 이런 부분을 조심해야겠다!
 */

const solution = (numbers, divisor) => {
  const answer = numbers
    .sort((a, b) => a - b)
    .filter((number) => {
      if (number % divisor === 0) return number;
    });

  return answer.length === 0 ? [-1] : answer;
};

describe('나누어 떨어지는 숫자 배열', () => {
  it('나누어지는 배열의 요소를 담은 배열을 반환합니다.', () => {
    expect(solution([5, 9, 7, 10], 5)).toEqual([5, 10]);
    expect(solution([3, 2, 6], 10)).toEqual([-1]);
  });
});

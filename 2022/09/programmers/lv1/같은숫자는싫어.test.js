/**
 * 미지의 것
 * - 연속적으로 나타나는 숫자를 하나만 남기고 전부 제거한 배열
 * 자료
 * - Set 생성자를 사용하면 중복을 제거할 수 있다.
 * 조건
 * arr원소의 크기는 0보다 크거나 같고 9보다 작거나 같은 정수이다.
 * 계획
 * 1. answer 배열을 선언한다.
 * 2. arr을 반복문을 돌며
 *      - i와 i+1이 같지 않다면 answer 배열에 넣는다.
 *
 *
 *
 * 반성
 * 문제를 잘 읽어야겠다..
 * 단순 중복 제거인 줄 알았지만
 * 문제를 자세히 읽으니 연속된 숫자를 하나만 남기고 제거하는 문제였다...
 */

const solution = (arr) => {
  const answer = [];

  arr.forEach((number, i) => {
    if (number !== arr[i + 1]) {
      answer.push(number);
    }
  });

  return answer;
};

describe('같은 숫자는 싫어', () => {
  it('중복이 제거된 배열을 리턴한다.', () => {
    expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  });
});

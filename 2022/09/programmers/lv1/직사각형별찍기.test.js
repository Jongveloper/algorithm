/**
 * 미지의 것
 * 직사각형으로 별이 찍힌 결과
 *
 * 자료
 * 가로의 길이 n , 세로의 길이 m
 *
 * 조건
 * n과 m은 1000 이하인 자연수
 *
 * 계획
 * repeat(n)을 사용하고
 * m만큼 반복문을 돌며 square 배열에 넣는다.
 * square 배열을 join('\n')으로 출력한다.
 *
 * 반성
 * 어렵지 않은 문제임에도
 * repeat을 쓸 때, 자주 사용하는 메서드가 아니다보니
 * 살짝 헷갈렸습니다.
 * 헷갈리지 않도록 연습을 열심히 해야할 것 같습니다.
 */

const solution = (n, m) => {
  const square = [];

  const rows = '*'.repeat(n);

  for (let i = 0; i < m; i += 1) {
    square.push(rows);
  }

  return square.join('\n');
};

describe('직사각형 별 찍기', () => {
  it('직사각형으로 별이 찍힙니다.', () => {
    expect(solution(5, 3)).toBe('*****\n*****\n*****');
  });
});

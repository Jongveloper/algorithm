/**
 * 미지의 것
 * -x부터 시작해 x씩 증가하는 숫자를 n개 지닌 리스트
 *
 * 자료
 * - x*2가 n개만큼 들어간 리스트를 만들면 된다.
 *
 * 조건
 * - x는 -10000000 이상, 10000000 이하인 정수입니다.
 * - n은 1000 이하인 자연수이다.
 *
 * 계획
 * 매개변수에 answer=[]를 넣어준다.
 * initialX = x를 넣어준다.
 * x * 2를 answer에 넣어준다.
 * n-=1을 한다.
 * n이 0이 아니면 재귀함수를 실행한다.
 * n이 0이 되면 함수가 종료된다.
 *
 *
 *
 * 반성
 * 재귀로 풀 때, 아직 재귀 조건을 완벽하게 컨트롤 하지 못한 것 같습니다.
 * 재귀를 사용하는게 능숙해질 수 있도록 열심히 노력해야겠습니다.
 *
 * 내장함수를 사용할 때 헷갈리는 부분이 있어 버벅이는 것이 있었습니다.
 * 연습이 많이 필요할 것 같습니다.
 */

// 재귀
// const solution = (x, n, answer = [], initailX = x, initialN = n) => {
//   if (n === 0) {
//     return answer;
//   }

//   if (initialN === n) {
//     answer.push(initailX);
//   } else {
//     answer.push(x + initailX);
//     x += initailX;
//   }

//   n -= 1;

//   return solution(x, n, answer, initailX, initialN);
// };

// 내장함수 이용하기
const solution = (x, n) => {
  return new Array(n).fill(0).map((_, index) => {
    return (index + 1) * x;
  });
};
describe('x만큼 간격이 있는 n개의 숫자', () => {
  it('x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴합니다.', () => {
    expect(solution(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});

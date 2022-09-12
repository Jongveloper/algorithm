/**
 * 미지의 것
 * 김서방의 위치
 *
 * 자료
 * 배열.indexOf('Kim')을 통해 위치를 찾을 수 있다.
 *
 * 조건
 * Kim은 반드시 포함되어 있다.
 * seoul의 원소는 길이 1이상, 20이하인 문자열이다.
 * seoul은 길이 1 이상, 1000이하인 배열이다.
 *
 * 계획
 * const location = seoul.indexOf('Kim')을 통해 김서방의 위치를 찾는다.
 * 김서방은 ${김서방위치}에 있다를 반환한다.
 *
 *
 * 반성
 * location 변수를 선언하지 않고 바로 반환하는 것이 좋은 방법인지
 * 현재 제가 푼 방법이 좋은 방법인지 아직은 잘 모르겠습니다.
 * 문제를 많이 풀어서 어떤 풀이가 좋은 방법인지 판별할 수 있도록 해야겠습니다.
 */

const solution = (seoul) => {
  const location = seoul.indexOf('Kim');
  return `김서방은 ${location}에 있다`;
};

describe('서울에서 김서방 찾기', () => {
  it('김서방의 위치를 반환합니다.', () => {
    expect(solution(['Jane', 'Kim'])).toBe('김서방은 1에 있다');
  });
});

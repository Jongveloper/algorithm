/**
 * 미지의 것
 * - 삼각형의 조건이 되는 지
 * 자료
 * - 삼각형이 되려면 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작아야 한다.
 * 계획
 * - 배열을 내림차순으로 정렬한다.
 * - slides[0] < slides[1] + slides[2] ? 1 : 2
 */

const solution = (slides) => {
  const sortedSlides = slides.sort((a, b) => b - a);

  return sortedSlides[0] < sortedSlides[1] + sortedSlides[2] ? 1 : 2;
};

describe('삼각형의 완성조건', () => {
  it('삼각형을 만들 수 있다면 1, 없다면 2를 리턴합니다.', () => {
    expect(solution([1, 2, 3])).toBe(2);
  });
});

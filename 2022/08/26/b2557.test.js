const solution = () => {
  return 'Hello World!';
};

console.log(solution());

describe('Hello World', () => {
  it('Hello World!를 출력합니다.', () => {
    expect(solution()).toBe('Hello World!');
  });
});

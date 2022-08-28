/**
 * 예를 들어, 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고,
 * 그 다음 수는 39 + 3 + 9 = 51,
 * 다음 수는 51 + 5 + 1 = 57이다.
 * 이런식으로 다음과 같은 수열을 만들 수 있다.
 * n을 d(n)의 생성자라고 한다.
 * 위의 수열에서 33은 39의 생성자이고,
 * 39는 51의 생성자, 51은 57의 생성자이다.
 * 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
 *
 * 1. d(75) = 75 + 7 + 8 = 87이 되는 함수를 만들자.
 * 2. 1부터 10,000까지의 숫자가 담긴 배열을 만든다.
 * 3. 배열에서 1번에서 만든 함수의 결괏값을 배열에서 제거한다.
 */

const sequence = (number) => {
  const splitNumber = number
    .toString()
    .split('')
    .map((item) => +item);

  return number + splitNumber.reduce((acc, cur) => acc + cur, 0);
};

const solution = () => {
  const array = new Array(10000).fill().map((_, i) => {
    return i + 1;
  });

  const sequenceArr = [];

  for (let i = 0; i < array.length; i += 1) {
    sequenceArr.push(sequence(array[i]));
  }

  const setSequence = new Set(sequenceArr);

  const uniqueSequence = [...setSequence];

  for (let i = 0; i < uniqueSequence.length; i += 1) {
    if (array.indexOf(uniqueSequence[i] !== -1)) {
      array.splice(array.indexOf(uniqueSequence[i]), 1, '');
    }
  }

  const answer = array.filter((v) => v !== '');

  return answer.join('\n');
};

console.log(solution());

describe('셀프넘버', () => {
  it('셀프넘버가 출력됩니다.', () => {
    expect(solution()).toBe('');
  });

  it('숫자의 각 자릿수와 숫자를 더한 값이 리턴됩니다.', () => {
    expect(sequence(75)).toBe(87);
  });
});

/* eslint-disable no-unused-expressions */
const fs = require('fs');

const filePath = process.platform === 'linux' && '/dev/stdin';

const input =
  process.platform === 'linux' && fs.readFileSync(filePath).toString().trim();

/**
 * 26부터 시작한다. 26 : 2+6 = 8 : 해결이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

구해야 하는 것 : 각 끝자리 수와 두 자릿수를 더한 값의 1의자리를 문자열로 더해 처음 값이 나올 때까지의 카운트
주어지는 것 : 숫자

26 : 2 + 6 = 8 => '68' => 6 + 8 = 14 => '84' => 8 + 4 = 12 => 42

- while문으로 푼다면
  - 1. 입력받은 숫자를 문자로 변환하고 배열로 변경한다. o
  - 2. 둘을 더한 값을 10으로 나눈 나머지를 문자열로 저장한다. o
  - 3. 1번에서 만든 배열의 length - 1에 2번 째의 결과를 문자열로 더한다. 
  - 4. 카운트를 한다.
  - 5. 위 과정을 원본 값과 같을 때 까지 반복한다.
- split하지 않고 문제 풀기
  - 1. number를 10으로 나눈 몫과 나머지를 더한다. o
  - 2. 1번에서 나온 값을 10으로 나눈 나머지와 numb    er를 10으로 나눈 나머지를 더한다.
  - 3. 위 과정을 반복하며 counting 한다.
 */

const devideNumber = (n) => {
  const stringToInteger = Number(n);

  const devide = Math.floor(stringToInteger / 10);

  const remain = stringToInteger % 10;

  return [devide, remain];
};

const solution = (number, newNumbers = 0, count = 0) => {
  if (number === 0) {
    return 1;
  }
  const devided = devideNumber(newNumbers !== 0 ? newNumbers : number);

  const intSum = devided.reduce((a, b) => a + b, 0);

  const devidedIntSum = devideNumber(intSum);

  const newNumber =
    devided[devided.length - 1].toString() +
    devidedIntSum[devidedIntSum.length - 1].toString();

  const counting = count + 1;

  if (Number(number) === Number(newNumbers)) {
    return counting - 1;
  }

  return solution(number, newNumber, counting);
};

console.log(solution(input));

describe('더하기 사이클', () => {
  it('더하기 사이클이 나옵니다.', () => {
    expect(solution(0)).toBe(1);
  });

  it('숫자를 분리합니다.', () => {
    expect(devideNumber('68')).toEqual([6, 8]);
  });
});

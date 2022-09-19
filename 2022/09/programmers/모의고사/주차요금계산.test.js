/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 * 미지의 것
 * - 주차 요금
 * 자료
 * - 입차내역만 있고 출차내역이 없다면 23:59에 출차된 것으로 간주
 * - 누적 주차 시간이 기본 시간 이하라면, 기본 요금을 청구
 * - 누적 주차 시간이 기본 시간을 초과하면, 기본요금에 더해서, 초과한 시간에 대해 단위시간마다 단위요금을 청구
 * - 초과하니 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림한다.
 *
 * - Math.ceil을 사용하면 올림할 수 있다.
 * - 차량 번호를 key / 총 주차 시간을 value로 오브젝트를 만들 수 있다.
 * - OUT (시간 * 60 + 분) - IN(시간 * 60 + 분)을 하여 주차 시간을 구할 수 있다.
 * 조건
 * - records의 원소들은 시각을 기준으로 오름차순으로 정렬되어 주어진다.
 *
 * 계획
 * - records 배열을 공백을 기준으로 split한다.
 *
 */

// const solution = (fees, records) => {
//   const cars = {};

//   const carId = records.map((item) => {
//     const car = item.split(' ')[1];
//     return car;
//   });

//   const setCarId = new Set(carId);
//   const uniqueCarId = [...setCarId];
//   const answer = [];

//   for (const id of uniqueCarId) {
//     cars[id] = [0, 0, 0];
//   }

//   const last = 23 * 60 + 59;

//   for (let i = 0; i < records.length; i += 1) {
//     const splitRecords = records[i].split(' ');
//     const carNumber = splitRecords[1];
//     const status = splitRecords[2];
//     const time = splitRecords[0].split(':');
//     const hours = Number(time[0]) * 60;
//     const minutes = Number(time[1]);

//     if (status === 'IN') {
//       cars[carNumber][0] = last - cars[carNumber][0] + hours + minutes;
//       cars[carNumber][1] = hours;
//       cars[carNumber][2] = minutes;
//     }

//     if (status === 'OUT') {
//       cars[carNumber][0] = hours + minutes - cars[carNumber][0] + last;
//       cars[carNumber][1] = 0;
//       cars[carNumber][2] = 0;
//     }
//   }

//   const sortable = Object.entries(cars)
//     .sort(([a], [b]) => Number(b) - Number(a))
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

//   for (const car in sortable) {
//     if (sortable[car][1] !== 0 || sortable[car][2] !== 0) {
//       sortable[car][0] =
//         Math.abs(sortable[car][1] + sortable[car][2] - last) +
//         (sortable[car][2] + sortable[car][1] - sortable[car][0] + last);
//       sortable[car][1] = 0;
//       sortable[car][2] = 0;
//     }

//     if (cars[car][0] <= fees[0]) {
//       answer.push(fees[1]);
//     } else {
//       answer.push(
//         Math.ceil((cars[car][0] - fees[0]) / fees[2]) * fees[3] + fees[1],
//       );
//     }
//   }

//   return answer.reverse();
// };

const solution = (fees, records) => {
  const cars = {};

  records.forEach((v) => {
    // 정보 쪼개기
    let [time, car, type] = v.split(' ');

    const [hour, minute] = time.split(':');

    // 분으로 바꾸기
    time = hour * 60 + Number(minute);

    // 처음 조회되는 차량일 시
    if (!cars[car]) {
      cars[car] = { time: 0, car };
    }

    cars[car].type = type;

    if (type === 'OUT') {
      cars[car].time += time - cars[car].lastInTime;
      return;
    }

    cars[car].lastInTime = time;
  });

  return Object.values(cars)
    .sort((a, b) => a.car - b.car)
    .map((v) => {
      if (v.type === 'IN') {
        v.time += 1439 - v.lastInTime;
      }

      if (fees[0] > v.time) {
        return fees[1];
      }

      return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
    });
};

describe('주차 요금 계산', () => {
  it('주차 요금이 출력됩니다.', () => {
    expect(
      solution(
        [180, 5000, 10, 600],
        [
          '05:34 5961 IN',
          '06:00 0000 IN',
          '06:34 0000 OUT',
          '07:59 5961 OUT',
          '07:59 0148 IN',
          '18:59 0000 IN',
          '19:09 0148 OUT',
          '22:59 5961 IN',
          '23:00 5961 OUT',
        ],
      ),
    ).toEqual([14600, 34400, 5000]);
  });
});

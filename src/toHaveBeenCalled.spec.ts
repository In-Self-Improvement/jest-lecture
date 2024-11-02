import { sum, obj } from "./toBe";

test("Sum 함수가 호출 되었다", () => {
  const sumSpy = jest.fn(sum); // jest.fn을 쓰는 이유: 자바스크립트에서 함수가 몇번 호출되었는지 파악할 수 있는 방법이 없음. 그래서 jest.fn을 써서 함수가 호출되었는지 확인할 수 있음. 보통 이런 경우 spy라는 이름을 붙임.
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled(); // toHaveBeenCalled는 실제로 테스트에 의미가 없는 경우가 많음.
});

test("Sum 함수가 1번 호출 되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("Sum 함수가 1, 2 인자로 호출 되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test("Object minus 함수가 1번 호출되었다.(Spy 함수 생성)", () => {
  const minusSpy = jest.fn(obj.minus);
  minusSpy(1, 2);
  expect(minusSpy).toHaveBeenCalledTimes(1);
});

test("Object minus 함수가 1번 호출되었다.(Spy 삽입)", () => {
  jest.spyOn(obj, "minus"); // object minus 자체를 변형시키는 함수
  obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
});

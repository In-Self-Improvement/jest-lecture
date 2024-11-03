import { obj } from "./mockFunction";

test("Object minus 함수가 1번 호출되었다.(Spy 삽입)", () => {
  jest.spyOn(obj, "minus"); // object minus 자체를 변형시키는 함수
  obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
});

test("Object minus 함수가 1번 호출되었다.(Spy도 심고 실행도 안시키고 싶다)", () => {
  jest.spyOn(obj, "minus").mockImplementation();
  const result = obj.minus(1, 2);
  expect(obj.minus).not.toHaveBeenCalledTimes(1);
  expect(result).not.toBe(-1);
});

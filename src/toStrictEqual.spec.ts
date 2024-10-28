import { obj } from "./toStrictEqual";

test("객체 끼리의 비교는 toStrictEqual 로 해야 함.", () => {
  expect(obj()).not.toBe({ a: "hello" }); // 이 테스트는 실패하게 됨.
  expect(obj()).toStrictEqual({ a: "hello" }); // 이 테스트는 성공하게 됨. - 객체 끼리의 비교는 toStrictEqual 로 해야 함.
});

test("배열 끼리의 비교도 toStrictEqual 로 해야 함.", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});

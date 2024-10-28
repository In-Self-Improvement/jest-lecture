import { obj } from "./toStrictEqual";

test("adds 1 + 2 to equal 3", () => {
  // expect(obj()).toBe({ a: "hello" }); // 이 테스트는 실패하게 됨.
  expect(obj()).toStrictEqual({ a: "hello" }); // 이 테스트는 성공하게 됨. - 객체 끼리의 비교는 toStrictEqual 로 해야 함.
});

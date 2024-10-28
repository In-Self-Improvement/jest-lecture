import { obj } from "./toMatchObject";

test("객체의 생성자가 다를 경우 toMatchObject 로 비교해야 함.", () => {
  expect(obj("hello")).not.toStrictEqual({ a: "hello" }); // 이 테스트는 실패하게됨. 생성자의 타입이 같기 때문에.
  expect(obj("hello")).toMatchObject({ a: "hello" }); // 이 테스트는 성공하게됨. 생성자의 타입이 같기 때문에.
});

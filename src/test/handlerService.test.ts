import handlerService from "../service/handlerService";

describe("Mailgun webhook service", () => {
  test("checks if all methods exist", () => {
    const { subscribe, mailgun } = handlerService;

    expect(typeof subscribe).toBe("function");
    expect(typeof mailgun).toBe("function");
  });
});

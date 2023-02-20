const entrega1_4 = require("../app/entrega1_4");

describe("Test function getData", () => {
  test("Should return data from the server with async/await", async () => {
    const result = await entrega1_4.getData();
    expect(result).toBeUndefined();
  });

  test("Should resolve with console log message 'data back from the server'", async () => {
    const spyLog = jest.spyOn(console, "log");
    await entrega1_4.getData();
    expect(spyLog).toHaveBeenCalledWith("data back from the server");
    spyLog.mockRestore();
  });

  test("Should resolve after 2 seconds with async/await", async () => {
    const start = Date.now();
    await entrega1_4.getData();
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(2000);
  });
});

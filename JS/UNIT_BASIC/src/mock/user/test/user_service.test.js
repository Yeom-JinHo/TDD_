const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");
describe("UserService", () => {
  let userService;
  const login = jest.fn(async () => {
    return [{ id: "yeom", password: "123" }];
  });

  UserClient.mockImplementation(() => {
    return { login };
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  test("login once", async () => {
    await userService.login("id", "password");
    expect(userService.isLogedIn).toBe(true);
  });

  test("login again", async () => {
    await userService.login("id", "password");
    await userService.login("id", "password");
    await userService.login("id", "password");
    expect(userService.isLogedIn).toBe(true);
    expect(login.mock.calls.length).toBe(1);
  });
});

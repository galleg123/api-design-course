import * as user from "../user";

describe("user handler", () => {
  it("should do create a new user", async () => {
    const req = {
      body: {
        username: "hello",
        password: "hi",
      },
    };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
        console.log(token);
      },
    };

    const newUser = await user.createNewUser(req, res, () => {});
  });
});

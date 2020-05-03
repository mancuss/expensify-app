import authReducers from "../../reducers/auth";

test("should set default auth object", () => {
  const state = authReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});
test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "uidstring",
  };
  const state = authReducers({}, action);
  expect(state).toEqual({
    uid: "uidstring",
  });
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducers({ uid: "test" }, action);
  expect(state).toEqual({});
});

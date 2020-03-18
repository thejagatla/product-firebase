const UserActions = user => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user
  };
};
export default UserActions;

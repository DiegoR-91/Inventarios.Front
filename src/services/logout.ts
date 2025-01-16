export const logout = () => {
  if (localStorage.getItem("accessToken") !== null) {
    localStorage.removeItem("accessToken");
  }
};

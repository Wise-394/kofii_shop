export const setJWT = (token) => {
  localStorage.setItem("token", token);
};

export const getJWT = () => {
  return localStorage.getItem("token");
};

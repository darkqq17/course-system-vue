import { userRoutes } from "../constants/apiEndpoints";

export const handleLogin = (loginData) => {
  const currentIdentity = new URLSearchParams(loginData);
  return fetch(userRoutes.login, {
    body: currentIdentity,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("POST to backend failed");
      } else return response.json();
    })
    .then((result) => result.data)
};

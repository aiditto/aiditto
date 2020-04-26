import { SESSION_TOKEN_KEY } from "../services/auth.service";
export const updateObject = (previousObject, updatedProperties) => {
  return {
    ...previousObject,
    ...updatedProperties
  };
};

export const authHeader = () => {
  // return authorization header with jwt token
  const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
};

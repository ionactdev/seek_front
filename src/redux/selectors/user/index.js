import get from "lodash/get"

export const getUserData = (state) => {
   return get(state, "user.userData");
};

export const getUserCompany = (state) => {
   return get(state, "user.userCompany");
};

export const getAllAdmins = (state) => {
   return get(state, "user.allAdmins");
};

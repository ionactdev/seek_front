import get from "lodash/get"

export const getUserData = (state) => {
   return get(state, "user.userData");
};

export const getUserCompany = (state) => {
   return get(state, "user.userCompany");
};

export const getSubmitting = (state) => {
   return get(state, "user.submitting");
};

export const getSuccess = (state) => {
   return get(state, "user.success");
};
import get from "lodash/get"

export const getCompany = (state) => {
   return get(state, "company.companyData");
};

export const getAllCompanies = (state) => {
   return get(state, "company.allCompanies");
};

export const getVerifiedCompanies = (state) => {
   return get(state, "company.verifiedCompanies");
};

export const getAllCompanyTypes = (state) => {
   return get(state, "company.allCompanyTypes");
};
// get company fetched by id
export const getCompanyDetail = (state) => {
   return get(state, "company.companyDetail");
};

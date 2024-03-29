import {
	CREATE_COMPANY,
	ADMIN_CREATE_COMPANY,
	FETCH_COMPANY,
	IMAGE_UPLOAD,
	UPDATE_COMPANY,
	UPDATE_EMPLOYEE,
	DELETE_EMPLOYEE,
	FETCH_ALL_COMPANIES,
	FETCH_ALL_COMPANY_TYPES,
	FETCH_VERIFIED_COMPANIES,
	PUBLISH_COMPANY,
	UN_PUBLISH_COMPANY,
	FETCH_COMPANY_BY_ID,
	ADD_EMPLOYEE,
} from "../../types/company";

export const createCompanyAction = (company) => ({
	type: CREATE_COMPANY,
	payload: {
		company
	}
})

export const adminCreateCompanyAction = (company) => ({
	type: ADMIN_CREATE_COMPANY,
	payload: {
		company
	}
})

export const updateCompanyAction = (company, companyId) => ({
	type: UPDATE_COMPANY,
	payload: {
		company,
		companyId
	}
})

export const publishCompanyAction = (id) => ({
	type: PUBLISH_COMPANY,
	payload: {
		id
	}
})

export const unPublishCompanyAction = (id) => ({
	type: UN_PUBLISH_COMPANY,
	payload: {
		id
	}
})

/**
 * @description this will fetch my company
 * @return {{type: string}}
 */
export const fetchCompanyAction = () => ({
	type: FETCH_COMPANY
})

/**
 * @description this will fetch company by id
 * @return {{type: string}}
 */
export const fetchCompanyByIdAction = (id) => ({
	type: FETCH_COMPANY_BY_ID,
	payload: {
		id
	}
})

export const fetchAllCompaniesAction = () => ({
	type: FETCH_ALL_COMPANIES
})

export const fetchVerifiedCompaniesAction = () => ({
	type: FETCH_VERIFIED_COMPANIES
})

export const uploadImageAction = (base64) => ({
	type: IMAGE_UPLOAD,
	payload: {
		base64
	}
})

/**
 * @description update employee's role on company
 * @param companyEmployee
 * @return {{payload: {companyEmployee: *}, type: string}}
 */
export const updateEmployeeAction = (companyEmployee) => ({
	type: UPDATE_EMPLOYEE,
	payload: {
		companyEmployee
	}
})
/**
 * delete employee from company
 * @param companyEmployee
 * @return {{payload: {companyEmployee: *}, type: string}}
 */
export const deleteEmployeeAction = (companyEmployee) => ({
	type: DELETE_EMPLOYEE,
	payload: {
		companyEmployee
	}
})

/**
 * @description fetch all company types
 * @return {{type: string}}
 */
export const fetchAllCompanyTypesAction = () => ({
	type: FETCH_ALL_COMPANY_TYPES,
})

export const addEmployeeAction = (newEmployee) => ({
	type: ADD_EMPLOYEE,
	payload: {
		newEmployee,
	}
})

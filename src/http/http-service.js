import {getToken} from "./token-interceptor";

const structureQueryParams = params => {
   let queryStrings = "?";
   const keys = Object.keys(params);
   keys.forEach((key, index) => {
	  queryStrings += key + "=" + params[key];
	  if (params[keys[index + 1]]) {
		 queryStrings += "&";
	  }
   });
   return queryStrings;
};
export const handleErrorIfAvailable = httpResponse => {
   switch (httpResponse.status) {
	  case 401: {
		 // Token expired
		 // localStorage.clear();
		 // window.location.reload();
		 break;
	  }
	  default: {

	  }
   }
}
export const makeGetRequest = async (
   url,
   attachToken = false,
   params = null
) => {
   let queryString = "";
   if (params) {
	  queryString = structureQueryParams(params);
   }
   let headers = {
	  Accept: "application/json",
	  "Content-Type": "application/json"
   };
   if (attachToken) {
	  try {
		 const authToken = await getToken();
		 if (authToken) {
			headers["x-token"] = authToken;
		 }
	  } catch (e) {
		 console.log(e);
	  }
   }
   return new Promise((resolve, reject) => {
	  try {
		 fetch(url + queryString, {
			method: "GET",
			headers: headers
		 })
			.then(
			   res => {
				  handleErrorIfAvailable(res);
				  return res.json();
			   })
			.then(jsonResponse => {
			   if (jsonResponse.statusCode === 200) {
				  resolve(jsonResponse.response);
			   } else {
				  reject(jsonResponse);
			   }
			})
			.catch(error => {
			   reject(error);
			});
	  } catch (e) {
		 console.log(e);
		 reject();
	  }
   });
};
export const makePostRequest = async (
   url,
   attachToken = false,
   params = {}
) => {
   let headers = {
	  Accept: "application/json",
	  "Content-Type": "application/json"
   };
   if (attachToken) {
	  try {
		 const authToken = await getToken();
		 if (authToken) {
			headers["x-token"] = authToken;
		 }
	  } catch (e) {
		 console.log("Error fetching auth token: ", e);
	  }
   }
   return new Promise((resolve, reject) => {
	  try {
		 fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(params)
		 })
			.then(
			   res => {
				  handleErrorIfAvailable(res);
				  return res.json();
			   })
			.then(jsonResponse => {
			   if (jsonResponse.statusCode === 200) {
				  resolve(jsonResponse.response);
			   } else {
				  reject(jsonResponse);
			   }
			})
			.catch(error => {
			   reject(error);
			});
	  } catch (e) {
		 console.log(e);
		 reject();
	  }
   });
};
export const makePutRequest = async (
   url,
   attachToken = false,
   params = {}
) => {
   let headers = {
	  Accept: "application/json",
	  "Content-Type": "application/json"
   };
   if (attachToken) {
	  try {
		 const authToken = await getToken();
		 if (authToken) {
			headers["x-token"] = authToken;
		 }
	  } catch (e) {
		 console.log("Error fetching auth token: ", e);
	  }
   }
   return new Promise((resolve, reject) => {
	  try {
		 fetch(url, {
			method: "PUT",
			headers: headers,
			body: JSON.stringify(params)
		 })
			.then(
			   res => {
				  handleErrorIfAvailable(res);
				  return res.json();
			   })
			.then(jsonResponse => {
			   if (jsonResponse.statusCode === 200) {
				  resolve(jsonResponse.response);
			   } else {
				  reject(jsonResponse);
			   }
			})
			.catch(error => {
			   reject(error);
			});
	  } catch (e) {
		 console.log(e);
		 reject();
	  }
   });
};
export const makeDeleteRequest = async (
   url,
   attachToken = false,
   params = {}
) => {
   let headers = {
	  Accept: "application/json",
	  "Content-Type": "application/json"
   };
   if (attachToken) {
	  try {
		 const authToken = await getToken();
		 if (authToken) {
			headers["x-token"] = authToken;
		 }
	  } catch (e) {
		 console.log("Error fetching auth token: ", e);
	  }
   }
   return new Promise((resolve, reject) => {
	  try {
		 fetch(url, {
			method: "DELETE",
			headers: headers,
			body: JSON.stringify(params)
		 })
			.then(
			   res => {
				  handleErrorIfAvailable(res);
				  return res.json();
			   })
			.then(jsonResponse => {
			   if (jsonResponse.statusCode === 200) {
				  resolve(jsonResponse.response);
			   } else {
				  reject(jsonResponse);
			   }
			})
			.catch(error => {
			   reject(error);
			});
	  } catch (e) {
		 console.log(e);
		 reject();
	  }
   });
};


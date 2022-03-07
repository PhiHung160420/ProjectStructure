import axios, { AxiosInstance } from 'axios';
import { handleError } from 'components/common/alert';
import {BASE_API_URL} from './config';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';
const REQ_JSON = 'json';
const REQ_FORM_DATA = 'form-data';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: BASE_API_URL,
	timeout: 15000,
});

// Handle response before return
axiosInstance.interceptors.response.use(
	response => {
		return Promise.resolve(response);
	},
	error => {
		if (error.response && error.response.data) {
			return Promise.resolve(error.response.data);
		}
		return error;
	},
);

// handle request before sent
axiosInstance.interceptors.request.use(
	async config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

function setToken(token: string) {
	axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export class APIService {
	config = {
  	headers: {
  		'Content-Type': 'application/json; charset=utf-8',
  	},
	};

	doRequest() {
		switch (this.method) {
			case METHOD_GET:
				return axiosInstance
					.get(this.url, { params: this.params })
					.then(response => this.handleResponse(response))
					.catch(error => this.onError(error));
			case METHOD_PUT:
				return axiosInstance
					.put(this.url, this.params, this.config)
					.then(response => this.handleResponse(response))
					.catch(error => this.onError(error));
			case METHOD_POST:
				return axiosInstance
					.post(this.url, this.params, this.config)
					.then(response => this.handleResponse(response))
					.catch(error => this.onError(error));
			case METHOD_DELETE:
				return axiosInstance
					.delete(this.url, { params: this.params })
					.then(response => this.handleResponse(response))
					.catch(error => this.onError(error));
		}
	}

  handleResponse = response => {
  	if (response && response.status >= 200 && response.status < 400) {
  		this.onResponse && this.onResponse(response.data);
  		return response.data;
  	} else {
  		this.onError && this.onError(response);
  	}
  };

  onError = error => {
  	this.onError(error);
  	return error;
  };

  static Builder = class {
  	constructor() {
  		this.axios = new APIService();
  	}

  	reqURL(url: string) {
  		this.axios.url = url;
  		return this;
  	}

  	paramsArrayList(arrayParams, keyLeft, keyRight = null) {
  		this.axios.reqType = REQ_FORM_DATA;
  		if (this.axios.params === undefined || this.axios.params === null) {
  			this.axios.params = new FormData();
  		}

  		if (arrayParams && arrayParams.length > 0) {
  			for (var i = 0; i < arrayParams.length; i++) {
  				if(arrayParams[i] instanceof Object) {
  					for(let prop in arrayParams[i]) {
  						let keyParams = `${keyLeft}[${i}][${prop}]`;
	
  						if(arrayParams[i][prop] instanceof Array) {
  							this.paramsArrayList(arrayParams[i][prop], keyParams);
  						}
  						else {
  							this.axios.params.append(keyParams, arrayParams[i][prop]);
  						}
  					}
  				}
  				else {
  					let keyParams = `${keyLeft}[${i}]`;
  					if (keyRight) {keyParams = `${keyLeft}[${i}]${keyRight}`;};
  					this.axios.params.append(keyParams, arrayParams[i]);
  				}
  			}
  		}
  		return this;
  	}

  	addFile(key, uri, type, name) {
  		this.axios.reqType = REQ_FORM_DATA;
  		if (this.axios.params === undefined || this.axios.params === null) {
  			this.axios.params = new FormData();
  		}
  		this.axios.params.append(key, {
  			uri: uri,
  			type: type,
  			name: name,
  		});
  		return this;
  	}

  	params(payload: any) {
  		if (payload) {
  			this.axios.params = payload;
  		}
  		return this;
  	}

  	response(onResponse) {
  		this.axios.onResponse = onResponse;
  		return this;
  	}

  	error(onError) {
  		this.axios.onError = onError;
  		return this;
  	}

  	post(url: string, payload: any) {
  		this.reqURL(url);
  		if (payload) {
  			this.params(JSON.stringify(payload));
  		}
  		this.axios.reqType = payload ? REQ_JSON : REQ_FORM_DATA;
  		this.axios.method = METHOD_POST;
  		return this.axios.doRequest();
  	}

  	put(url: string, payload: any) {
  		this.reqURL(url);
  		if (payload) {
  			this.params(JSON.stringify(payload));
  		}
  		this.axios.reqType = payload ? REQ_JSON : REQ_FORM_DATA;
  		this.axios.method = METHOD_PUT;
  		return this.axios.doRequest();
  	}

  	get(url: string, payload: any) {
  		this.reqURL(url);
  		this.params(payload);
  		this.axios.method = METHOD_GET;
  		return this.axios.doRequest();
  	}

  	delete(url: string, payload: any) {
  		this.reqURL(url);
  		this.params(payload);
  		this.axios.method = METHOD_DELETE;
  		return this.axios.doRequest();
  	}
  };
}

export { axiosInstance, setToken };
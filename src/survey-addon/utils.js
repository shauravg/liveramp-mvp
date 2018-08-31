import axios from 'axios';

const BASE_TYPEFORM_ENDPOINT = 'https://api.typeform.com';

export const getForm = (id) => {
	return makeRequest('get', 'forms', id);
}

const makeRequest = (method, resource, id=null, data={}) => {
	return axios({
		method,
		url: id ? `${BASE_TYPEFORM_ENDPOINT}/${resource}/${id}` : `${BASE_TYPEFORM_ENDPOINT}/${resource}`,
		data,
		headers: {
			'Authorization': 'Bearer HJ7e5ghU7729YexErGBCBDHZZqBhJhiKW4EN3iJC4KoT'
		}
	});
}
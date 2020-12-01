import axiox from 'axios';

const api = ({ dispatch }) => next => async action => {

	next(action);

	if(action.type !== 'apiCallBegin') return;

	const { url, method, data, onSuccess, onError } = action.payload;
	
	try {
		
		const response = await axiox.request({
			baseURL: 'http://localhost:9001/api',
			url,
			method,
			data
		});

		dispatch({ type: onSuccess, payload: response.data });

	} catch (error) {
		dispatch({ type: onError, payload: error });
	}

}

export default api;
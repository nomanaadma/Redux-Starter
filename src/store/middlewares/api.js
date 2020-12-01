import axiox from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {

	next(action);

	if(action.type !== actions.apiCallBegin.type) return;

	const { url, method, data, onSuccess, onError } = action.payload;
	
	try {
		
		const response = await axiox.request({
			baseURL: 'http://localhost:9001/api',
			url,
			method,
			data
		});

		// general
		dispatch(actions.apiCallSuccess(response.data));

		// specific
		if(onSuccess) dispatch({ type: onSuccess, payload: response.data });

	} catch (error) {

		// general
		dispatch(actions.apiCallFailed(error));

		// specific
		if(error) dispatch({ type: onError, payload: error });
	}

}

export default api;
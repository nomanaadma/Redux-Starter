import axiox from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {


	if(action.type !== actions.apiCallBegin.type) return next(action);

	const { url, method, data, onSuccess, onError, onStart } = action.payload;

	// onStart
	if(onStart) dispatch({ type: onStart });
	next(action);

	
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
		dispatch(actions.apiCallFailed(error.message));

		// specific
		if(error) dispatch({ type: onError, payload: error.message });
	}

}

export default api;
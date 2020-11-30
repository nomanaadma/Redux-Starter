import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middlewares/logger';
import func from './middlewares/func';

export default function() {
    return configureStore({ 
        reducer,
        middleware: [logger('console'), func]
    });
};
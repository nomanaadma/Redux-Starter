import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middlewares/logger';
import toast from './middlewares/toast';

export default function() {
    return configureStore({ 
        reducer,
        middleware: [...getDefaultMiddleware(), toast, logger('console'), toast]
    });
};
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middlewares/logger';
import toast from './middlewares/toast';
import api from './middlewares/api';

export default function() {
    return configureStore({ 
        reducer,
        middleware: [...getDefaultMiddleware(), logger('console'), toast, api]
    });
};
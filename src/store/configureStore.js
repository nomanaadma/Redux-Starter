import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middlewares/logger';

export default function() {
    return configureStore({ 
        reducer,
        middleware: [logger]
    });
};
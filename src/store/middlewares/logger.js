const logger = param => store => next => action => {
    console.log(param, store, next, action);
    next(action);
}

export default logger;
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
        error: err,
    });
};

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }else {
        console.error('Error 🧨', err);
        res.status(500).json({
          status: 'fail',
          message: 'Something went very wrong!',
        });
      }
};

const globalErrorHandler = (err, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'fail';

    if(process.env.NODE_ENV === 'development'){
        sendErrorDev(err, res)
    }

    if(process.env.NODE_ENV === 'production'){
        sendErrorProd(err, res)
    }
};

module.exports = globalErrorHandler

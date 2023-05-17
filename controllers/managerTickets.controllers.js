const axios = require('axios');
const generateToken = require('../utils/generateTokenZoho');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.findAllTikets = catchAsync(async (req, res, next) => {

        const token = await generateToken();

        if(!token){
            return new AppError('Ops!, authorization failed',401)
        }

        req.headers.authorization = token

        res.status(200).json({
            status: 'success',
            token,
        });
});

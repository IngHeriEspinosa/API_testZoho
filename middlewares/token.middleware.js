const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const generateHour = require('../utils/generateHour');
const generateToken = require('../utils/generateTokenZoho');

exports.validToken = catchAsync(async (req, res, next) => {
    const hour = await generateHour();
    let closeHour = Number(hour - 3500000);
    let token = req.token;

    if (token) {
        let hourToken = Number(token.split(' ')[1]);

        if (hourToken <= closeHour) {
            token = await generateToken(hour);
            return (token = token.split(' ')[0]);
        }
    }

    if (!token) token = await generateToken(hour);

    if (!token) {
        return new AppError('Ops!, authorization failed', 401);
    }

    req.token = token;

    next();
});

const axios = require('axios');
const catchAsync = require('../utils/catchAsync');

exports.findAllTikets = catchAsync(async (req, res, next) => {
    let token = req.token;
    const url = 'https://www.zohoapis.com/crm/v2/Tasks';
    let tickets;

    token = token.split(' ')[0];

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    tickets = await axios
        .get(url, config)
        .then((res) => res.data)
        .catch((err) => console.log(err.message));

    res.status(200).json({
        status: 'success',
        token,
        results: tickets.data.length,
        tickets,
    });
});

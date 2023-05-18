const axios = require('axios');
const querystring = require('querystring');

const generateToken = async (hour) => {
    const data = querystring.stringify({
        refresh_token: process.env.REFRESH_TOKEN,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: process.env.GRANT_TYPE,
    });

    const url = 'https://accounts.zoho.com/oauth/v2/token';
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const hourGenerateToken = +hour;
    let result;

    await axios
        .post(url, data, { headers })
        .then(
            (res) => (result = res.data.access_token + ' ' + hourGenerateToken)
        )
        .catch((error) => console.log(error));

    return result;
};

module.exports = generateToken;

const axios = require('axios');
const querystring = require('querystring');

const generateToken = async () => {
    const data = querystring.stringify({
        refresh_token:
            '1000.9b8ac0d597c98b9a2fdd0eb527fcb097.a9d7ddb6e9b728375d7c7a7311db437e',
        client_id: '1000.3MQ5K1BMLEPTWPLEJA1PL582RQC39V',
        client_secret: '7b695384be392ca7d3a241a0262c729b7d67aa483c',
        grant_type: 'refresh_token',
    });

    const url = 'https://accounts.zoho.com/oauth/v2/token';
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    let result;

    await axios.post(url, data, {headers})
        .then(res => result = res.data.access_token)
        .catch(error => console.log(error))

    return result
};

module.exports = generateToken;

const generateHour = () => {
    const dateTime = new Date();
    return dateTime.getTime();
};

module.exports = generateHour;

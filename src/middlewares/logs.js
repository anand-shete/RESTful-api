const fs = require('fs');
const moment = require('moment');;

const generateLogs = (req, res, next) => {
    const date = new moment();

    // get the ip 
    let ip = req.ip;
    if (ip == '::1') ip = '127.0.0.1';

    // append data to a file
    fs.appendFile("user.log",
        `\n${date.format('DD MMM YY hh:mm a')}, '${req.method}',  '${ip}',  ${req.path}`,
        (err, data) => { if (err) console.log('Error in appending data: ', err) }
    );

    next();
}

module.exports = { generateLogs }
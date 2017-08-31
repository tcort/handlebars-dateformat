'use strict';

var moment = require('moment');

module.exports = function dateFormat(date, format, utc) {
    return (utc === true) ? moment(date).utc().format(format) : moment(date).format(format);
};

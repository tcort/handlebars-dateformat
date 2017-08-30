'use strict';

var moment = require('moment');
var expect = require('expect.js');
var handlebars = require('handlebars');
var dateFormat = require('../');

handlebars.registerHelper('dateFormat', dateFormat);

describe('handlebars-dateformat', function () {
    it('should format a date object with format as a string constant', function () {
        var template = handlebars.compile('{{dateFormat date "YYYY-MM-DD"}}');
        var rendered = template({ date: new Date('December 17, 1995 03:24:00') });
        expect(rendered).to.be('1995-12-17');
    });
    it('should format a moment object with format as a string constant', function () {
        var template = handlebars.compile('{{dateFormat date "YYYY-MM-DD"}}');
        var rendered = template({ date: moment("2010-01-01T05:06:07", moment.ISO_8601) });
        expect(rendered).to.be('2010-01-01');
    });
    it('should format a date object with format as a variable', function () {
        var template = handlebars.compile('{{dateFormat date format}}');
        var rendered = template({ date: new Date('December 17, 1995 03:24:00'), format: 'YYYY-MM-DD' });
        expect(rendered).to.be('1995-12-17');
    });
    it('should format a moment object with format as a variable', function () {
        var template = handlebars.compile('{{dateFormat date format}}');
        var rendered = template({ date: moment("2010-01-01T05:06:07", moment.ISO_8601), format: 'YYYY-MM-DD' });
        expect(rendered).to.be('2010-01-01');
    });
    it('should format dates in UTC', function () {
        var template = handlebars.compile('{{dateFormat date format true}}');
        var rendered = template({ date: moment("2010-01-01T05:06:07Z", moment.ISO_8601), format: 'YYYY-MM-DD HH:mm:ss' });
        expect(rendered).to.be('2010-01-01 05:06:07');
    });
});

# handlebars-dateformat

[handlebars](http://handlebarsjs.com/) date format [helper](http://handlebarsjs.com/block_helpers.html).

## Installation

    npm install --save handlebars-dateformat

## Usage

### Register the Helper

    handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

### Call the helper from a template

    {{dateFormat date format utc}}

Parameters:

* `date` is a JavaScript [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) or an instance of [moment](http://momentjs.com/).
* `format` is a string containing the desired format (can be a variable or a literal). Placeholders are defined in the [moment.js docs](http://momentjs.com/docs/#/displaying/).
* `utc` optional boolean (`true` or `false`) to decide whether or not to convert the date to UTC before formatting. Defaults to `false`.

## Example

`app.js`:

    "use strict";

    var hbs = require('hbs');
    var express = require('express');

    hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

    var app = express();

    app.set('view engine', 'hbs');    

    app.get('/', function (req, res) {
        res.render('index', { now: new Date() });
    });

    app.listen(3000);

`views/index.hbs`:

    The server time is: {{dateFormat now "dddd, MMMM Do YYYY, h:mm:ss a"}}

## Testing

    npm test

## License

See [LICENSE.md](https://github.com/tcort/handlebars-dateformat/blob/master/LICENSE.md)

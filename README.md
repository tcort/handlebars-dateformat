# handlebars-dateformat



## Installation

    npm install --save handlebars-dateformat

## Usage

### Register the Helper

    handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

### Call the helper from a template

    {{dateFormat date format}}

Parameters:

* `date` is a JavaScript [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) or an instance of [moment](http://momentjs.com/).
* `format` is a string containing the desired format (can be a variable or a literal). Placeholders are defined in the [moment.js docs](http://momentjs.com/docs/#/displaying/).

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

```
Copyright (c) 2015 Thomas Cort <linuxgeek@gmail.com>

Permission to use, copy, modify, and distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

var canControl = require('can-control');
var stache = require('can-stache');
var $ = require('can-jquery');
var mainTemplate = stache(require('raw-loader!./maintemplate.html'));

$('body').append(mainTemplate({title: 'My App'}));

const test = require('ava');
const dhms = require('.');

test('base', t => {
    t.is(dhms('123'), 123);
    t.is(dhms('1s'), 1000);
    t.is(dhms('1m'), 60000);
    t.is(dhms('1h'), 3600000);
    t.is(dhms('1d'), 86400000);
});

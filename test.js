const test = require('ava');
const dhms = require('.');

test('zero', t => {
    t.is(dhms('000'), 0);
    t.is(dhms('bad'), 0);
    t.is(dhms('dhms'), 0);
});

test('base', t => {
    t.is(dhms('123'), 123);
    t.is(dhms('1s'), 1000);
    t.is(dhms('1m'), 60000);
    t.is(dhms('1h'), 3600000);
    t.is(dhms('1d'), 86400000);
});

test('complicated', t => {
    t.is(dhms('1d2h30m45s123'), 95445123);
});

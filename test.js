const test = require('ava');
const dhms = require('.');

test('zero', t => {
    t.is(dhms('000'), 0);
    t.is(dhms('bad'), 0);
    t.is(dhms('dhms'), 0);
    t.is(dhms('123x'), 0);
    t.is(dhms(''), 0);
    t.is(dhms(true), 0);
    t.is(dhms(false), 0);
    t.is(dhms(null), 0);
    t.is(dhms(), 0);
    t.is(dhms(0), 0);
    t.is(dhms(123), 0);
    t.is(dhms([123]), 0);
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

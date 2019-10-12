module.exports = str => (str.replace(/\s/g, '').match(/\d+(\D+|$)/g) || [])
    .map(v => +v.replace(/\D+/g, '') * ({
        s: 1000,
        m: 60000,
        h: 3600000,
        d: 86400000,
    }[v.replace(/\d+/g, '')] || 1))
    .reduce((a, b) => a + b, 0);

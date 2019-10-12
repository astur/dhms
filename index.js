module.exports = str => {
    if(typeof str !== 'string') return 0;
    const fixed = str.replace(/\s/g, '');
    const tail = +fixed.match(/\d+$/g) || 0;
    const parts = (fixed.match(/\d+\D+/g) || [])
        .map(v => +v.replace(/\D+/g, '') * ({s: 1000, m: 60000, h: 3600000, d: 86400000}[v.replace(/\d+/g, '')] || 0));
    return [tail, ...parts].reduce((a, b) => a + b, 0);
};

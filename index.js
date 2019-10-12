module.exports = (str, sec = false) => {
    const x = sec ? 1 : 1000;
    if(typeof str !== 'string') return 0;
    const fixed = str.replace(/\s/g, '');
    const tail = +fixed.match(/\d+$/g) || 0;
    const parts = (fixed.match(/\d+\D+/g) || [])
        .map(v => +v.replace(/\D+/g, '') * ({s: x, m: 60 * x, h: 3600 * x, d: 86400 * x}[v.replace(/\d+/g, '')] || 0));
    return [tail, ...parts].reduce((a, b) => a + b, 0);
};

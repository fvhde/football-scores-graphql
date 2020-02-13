let port = 3000;

if ( process.env.NODE_ENV === 'test' ) {
    port = 3700;
}

module.exports = {
    "port": port,
    "apiToken" : '98b88790dd19469db5807314dd2317f4'
};

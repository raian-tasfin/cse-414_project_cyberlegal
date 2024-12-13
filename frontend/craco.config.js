const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@home': path.resolve(__dirname, 'src'),
        },
    },
};

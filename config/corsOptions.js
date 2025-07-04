const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            const error = new Error(`Blocked by CORS: ${origin}`);
            console.error(error.message);
            callback(error);
        }
    },
    optionsSuccessStatus: 200
};

module.exports = corsOptions
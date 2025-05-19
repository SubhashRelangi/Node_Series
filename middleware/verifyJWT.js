const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.sendStatus(401);

    // Corrected token extraction
    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); // Invalid token
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            return next();
        }
    );
};

module.exports = verifyJWT;
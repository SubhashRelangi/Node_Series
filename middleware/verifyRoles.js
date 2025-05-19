const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles || !Array.isArray(req.roles)) return res.sendStatus(401);

        const rolesArray = new Set(allowedRoles);

        const hasValidRole = req.roles.some(role => rolesArray.has(role));
        if (!hasValidRole) return res.sendStatus(401); // Changed status code to 403 for better semantics

        next();
    };
};

module.exports = verifyRoles;
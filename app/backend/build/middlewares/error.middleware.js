"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(err, req, res, next) {
    return res.status(Number(err.stack) || 500).json({
        error: err.name,
        message: err.message,
        code: err.stack,
    });
}
exports.default = errorMiddleware;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
exports.sha1 = (data) => crypto_1.createHash('sha1')
    .update(data)
    .digest('hex');
//# sourceMappingURL=hash.js.map
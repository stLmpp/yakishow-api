"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class RepositoryCustom extends typeorm_1.Repository {
    async exists(where) {
        return !!(await this.findOne({ where }));
    }
}
exports.RepositoryCustom = RepositoryCustom;
//# sourceMappingURL=repository-custom.js.map
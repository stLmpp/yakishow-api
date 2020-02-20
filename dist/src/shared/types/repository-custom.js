"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class RepositoryCustom extends typeorm_1.Repository {
    async exists(where) {
        return !!(await this.findOne({ where }));
    }
    async findRandom(length = 20, select) {
        var _a;
        const queryBuilder = this.createQueryBuilder()
            .orderBy('rand()')
            .limit(length);
        if ((_a = select) === null || _a === void 0 ? void 0 : _a.length) {
            queryBuilder.addSelect(select);
        }
        return queryBuilder.getMany();
    }
}
exports.RepositoryCustom = RepositoryCustom;
//# sourceMappingURL=repository-custom.js.map
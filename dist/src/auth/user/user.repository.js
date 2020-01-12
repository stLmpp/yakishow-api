"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const my_sql_error_1 = require("../../shared/error/my-sql-error");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async register(dto) {
        const user = Object.assign(Object.assign({}, dto), new user_entity_1.User());
        user.salt = await bcryptjs_1.genSalt();
        user.password = await bcryptjs_1.hash(dto.password, user.salt);
        try {
            const newUser = await this.save(user);
            newUser.password = null;
            newUser.salt = null;
            return newUser;
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar registar o usuário');
        }
    }
    async login(dto) {
        const { username, password } = dto;
        const user = await this.createQueryBuilder('user')
            .andWhere('user.username = :username', { username })
            .getOne();
        if (!user) {
            throw new common_1.UnauthorizedException('Usuário / Email ou senha inválida');
        }
        const isPasswordValid = await user.validatePassword(password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Usuário / Email ou senha inválida');
        }
        user.password = null;
        user.salt = null;
        return user;
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map
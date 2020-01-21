"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("./user/user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user/user.service");
const is_what_1 = require("is-what");
let AuthService = class AuthService {
    constructor(userRepository, jwtService, userService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async register(dto) {
        const user = await this.userRepository.register(dto);
        user.token = await this.getToken(user.id);
        return user;
    }
    async login(dto) {
        const user = await this.userRepository.login(dto);
        user.token = await this.getToken(user.id);
        return user;
    }
    async getToken(id) {
        return await this.jwtService.signAsync({ id });
    }
    getUser() {
        return this.userService.user;
    }
    setHistory(entity) {
        const user = this.getUser();
        const id = user ? user.id : -1;
        if (!entity.createdBy)
            entity.createdBy = id;
        entity.lastUpdatedBy = id;
        for (const key in entity) {
            if (entity.hasOwnProperty(key) && entity[key]) {
                if (is_what_1.isObject(entity[key])) {
                    entity[key] = this.setHistory(entity[key]);
                }
                else if (is_what_1.isArray(entity[key]) && entity[key].length) {
                    entity[key] = this.setHistoryArray(entity[key]);
                }
            }
        }
        return entity;
    }
    setHistoryArray(entities) {
        let index = entities.length;
        while (index--)
            entities[index] = this.setHistory(entities[index]);
        return entities;
    }
};
AuthService = __decorate([
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
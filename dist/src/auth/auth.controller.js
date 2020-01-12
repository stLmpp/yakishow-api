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
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_1 = require("./user/dto/register");
const user_entity_1 = require("./user/user.entity");
const credentials_1 = require("./user/dto/credentials");
const swagger_1 = require("@nestjs/swagger");
const update_history_pipe_1 = require("./update-history.pipe");
const get_user_decorator_1 = require("./get-user.decorator");
const passport_1 = require("@nestjs/passport");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(dto) {
        return this.authService.register(dto);
    }
    async login(dto) {
        return this.authService.login(dto);
    }
    async autoLogin(user) {
        user.password = null;
        user.salt = null;
        return user;
    }
};
__decorate([
    common_1.Post('register'),
    swagger_1.ApiResponse({ status: 201, type: user_entity_1.User }),
    __param(0, common_1.Body(common_1.ValidationPipe, update_history_pipe_1.UpdateHistoryPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_1.AuthRegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.Post('login'),
    swagger_1.ApiResponse({ status: 200, type: user_entity_1.User }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentials_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get('auto-login'),
    common_1.UseGuards(passport_1.AuthGuard()),
    swagger_1.ApiResponse({ status: 200, type: user_entity_1.User }),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "autoLogin", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
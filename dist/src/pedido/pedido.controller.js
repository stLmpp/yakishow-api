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
const pedido_service_1 = require("./pedido.service");
const pedido_entity_1 = require("./pedido.entity");
const add_1 = require("./dto/add");
const typeorm_1 = require("typeorm");
const update_1 = require("./dto/update");
const swagger_1 = require("@nestjs/swagger");
const pedido_status_enum_1 = require("./pedido-status.enum");
const with_auth_guard_decorator_1 = require("../auth/with-auth-guard.decorator");
let PedidoController = class PedidoController {
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
    }
    async add(dto) {
        return this.pedidoService.add(dto);
    }
    async update(id, dto) {
        return this.pedidoService.update(id, dto);
    }
    async findByStatus(status) {
        return this.pedidoService.findByStatus(status);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 200, type: pedido_entity_1.Pedido }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_1.PedidoAddDto]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "add", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiResponse({ status: 200, type: typeorm_1.UpdateResult }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_1.PedidoUpdateDto]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "update", null);
__decorate([
    common_1.Get('status'),
    swagger_1.ApiResponse({ status: 200, type: pedido_entity_1.Pedido, isArray: true }),
    swagger_1.ApiQuery({ name: 'status', enum: pedido_status_enum_1.PedidoStatusEnum }),
    __param(0, common_1.Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "findByStatus", null);
PedidoController = __decorate([
    common_1.Controller('pedido'),
    with_auth_guard_decorator_1.WithAuthGuard(),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService])
], PedidoController);
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map
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
const pedido_item_service_1 = require("./pedido-item.service");
const pedido_item_entity_1 = require("./pedido-item.entity");
const add_1 = require("./dto/add");
const typeorm_1 = require("typeorm");
const update_1 = require("./dto/update");
const swagger_1 = require("@nestjs/swagger");
const with_auth_guard_decorator_1 = require("../../auth/with-auth-guard.decorator");
let PedidoItemController = class PedidoItemController {
    constructor(pedidoItemService) {
        this.pedidoItemService = pedidoItemService;
    }
    async addBatch(idPedido, dto) {
        return this.pedidoItemService.addBatch(idPedido, dto);
    }
    async add(idPedido, dto) {
        return this.pedidoItemService.add(idPedido, dto);
    }
    async updateBatch(dto) {
        return this.pedidoItemService.updateBatch(dto);
    }
    async update(id, dto) {
        return this.pedidoItemService.update(id, dto);
    }
};
__decorate([
    common_1.Post('pedido/:idPedido/pedido-item/batch'),
    swagger_1.ApiResponse({ status: 200, type: pedido_item_entity_1.PedidoItem, isArray: true }),
    swagger_1.ApiBody({ isArray: true, type: add_1.PedidoItemAddDto }),
    __param(0, common_1.Param('idPedido', common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], PedidoItemController.prototype, "addBatch", null);
__decorate([
    common_1.Post('pedido/:idPedido/pedido-item'),
    swagger_1.ApiResponse({ status: 200, type: pedido_item_entity_1.PedidoItem }),
    __param(0, common_1.Param('idPedido', common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_1.PedidoItemAddDto]),
    __metadata("design:returntype", Promise)
], PedidoItemController.prototype, "add", null);
__decorate([
    common_1.Patch('pedido-item/batch'),
    swagger_1.ApiResponse({ status: 200, type: typeorm_1.UpdateResult, isArray: true }),
    swagger_1.ApiBody({ isArray: true, type: update_1.PedidoItemUpdateDto }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PedidoItemController.prototype, "updateBatch", null);
__decorate([
    common_1.Patch('pedido-item/:id'),
    swagger_1.ApiResponse({ status: 200, type: typeorm_1.UpdateResult }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_1.PedidoItemUpdateDto]),
    __metadata("design:returntype", Promise)
], PedidoItemController.prototype, "update", null);
PedidoItemController = __decorate([
    common_1.Controller(),
    with_auth_guard_decorator_1.WithAuthGuard(),
    __metadata("design:paramtypes", [pedido_item_service_1.PedidoItemService])
], PedidoItemController);
exports.PedidoItemController = PedidoItemController;
//# sourceMappingURL=pedido-item.controller.js.map
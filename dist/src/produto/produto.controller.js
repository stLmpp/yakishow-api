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
const produto_service_1 = require("./produto.service");
const produto_entity_1 = require("./produto.entity");
const add_1 = require("./dto/add");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const update_1 = require("./dto/update");
const with_auth_guard_decorator_1 = require("../auth/with-auth-guard.decorator");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    async add(dto) {
        return this.produtoService.add(dto);
    }
    async update(id, dto) {
        return this.produtoService.update(id, dto);
    }
    async findById(id) {
        return this.produtoService.findById(id);
    }
    async findByCodigo(codigo) {
        return this.produtoService.findByCodigo(codigo);
    }
    async findByDescricao(descricao) {
        if (!descricao)
            throw new common_1.BadRequestException('Descrição é obrigatória');
        return this.produtoService.findByDescricao(descricao);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 200, type: produto_entity_1.Produto }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_1.ProdutoAddDto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "add", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiResponse({ status: 200, type: typeorm_1.UpdateResult }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_1.ProdutoUpdateDto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "update", null);
__decorate([
    common_1.Get('id/:id'),
    swagger_1.ApiResponse({ status: 200, type: produto_entity_1.Produto }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findById", null);
__decorate([
    common_1.Get('codigo'),
    swagger_1.ApiResponse({ status: 200, type: produto_entity_1.Produto }),
    __param(0, common_1.Query('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findByCodigo", null);
__decorate([
    common_1.Get('descricao'),
    swagger_1.ApiResponse({ status: 200, type: produto_entity_1.Produto, isArray: true }),
    __param(0, common_1.Query('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findByDescricao", null);
ProdutoController = __decorate([
    common_1.Controller('produto'),
    with_auth_guard_decorator_1.WithAuthGuard(),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map
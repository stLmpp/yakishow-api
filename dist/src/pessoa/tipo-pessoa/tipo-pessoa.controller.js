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
const swagger_1 = require("@nestjs/swagger");
const tipo_pessoa_entity_1 = require("./tipo-pessoa.entity");
const tipo_pessoa_service_1 = require("./tipo-pessoa.service");
const add_1 = require("./dto/add");
let TipoPessoaController = class TipoPessoaController {
    constructor(tipoPessoaService) {
        this.tipoPessoaService = tipoPessoaService;
    }
    async findAll() {
        return this.tipoPessoaService.findAll();
    }
    async add(dto) {
        return this.tipoPessoaService.add(dto);
    }
};
__decorate([
    common_1.Get('all'),
    swagger_1.ApiResponse({ status: 200, type: tipo_pessoa_entity_1.TipoPessoa, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoPessoaController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 201, type: tipo_pessoa_entity_1.TipoPessoa }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_1.TipoPessoaAddDto]),
    __metadata("design:returntype", Promise)
], TipoPessoaController.prototype, "add", null);
TipoPessoaController = __decorate([
    common_1.Controller('tipo-pessoa'),
    __metadata("design:paramtypes", [tipo_pessoa_service_1.TipoPessoaService])
], TipoPessoaController);
exports.TipoPessoaController = TipoPessoaController;
//# sourceMappingURL=tipo-pessoa.controller.js.map
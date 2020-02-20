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
const pessoa_service_1 = require("./pessoa.service");
const add_1 = require("./dto/add");
const pessoa_entity_1 = require("./pessoa.entity");
const update_1 = require("./dto/update");
const parse_int_pipe_1 = require("../shared/pipe/parse-int-pipe");
const with_auth_guard_decorator_1 = require("../auth/with-auth-guard.decorator");
const parse_array_pipe_1 = require("../shared/pipe/parse-array.pipe");
let PessoaController = class PessoaController {
    constructor(pessoaService) {
        this.pessoaService = pessoaService;
    }
    async add(dto) {
        return this.pessoaService.add(dto);
    }
    async update(dto, id) {
        return this.pessoaService.update(id, dto);
    }
    async findById(id) {
        return this.pessoaService.findById(id);
    }
    async findByParams(term, tipos) {
        return this.pessoaService.findByParams(term, tipos);
    }
    async findByTipo(tipos) {
        return this.pessoaService.findByTipos(tipos);
    }
    async existsByCelular(celular, id) {
        return this.pessoaService.existsByCelular(celular, id);
    }
    async findByPage(page, limit) {
        if (!limit)
            limit = 25;
        return this.pessoaService.findByPage({ page, limit, route: '/page' });
    }
    async findAll() {
        return this.pessoaService.findAll();
    }
    async findRandom15(length) {
        return this.pessoaService.findRandom(length);
    }
    async existsByEmail(email, id) {
        return this.pessoaService.existsByEmail(email, id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 201, type: pessoa_entity_1.Pessoa }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_1.PessoaAddDto]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "add", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __param(1, common_1.Param('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_1.PessoaUpdateDto, Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "update", null);
__decorate([
    common_1.Get('id/:id'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa }),
    __param(0, common_1.Param('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findById", null);
__decorate([
    common_1.Get('search'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa, isArray: true }),
    swagger_1.ApiQuery({ name: 'tipos', type: Number, isArray: true, required: false }),
    swagger_1.ApiQuery({ name: 'term', type: String, required: false }),
    __param(0, common_1.Query('term')),
    __param(1, common_1.Query('tipos', new parse_array_pipe_1.ParseArrayPipe('number'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findByParams", null);
__decorate([
    common_1.Get('tipo'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa, isArray: true }),
    swagger_1.ApiQuery({ name: 'tipos', type: Number, isArray: true }),
    __param(0, common_1.Query('tipos', new parse_array_pipe_1.ParseArrayPipe('number'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findByTipo", null);
__decorate([
    common_1.Get('exists/celular/:celular'),
    swagger_1.ApiResponse({ status: 200, type: Boolean }),
    __param(0, common_1.Param('celular')),
    __param(1, common_1.Query('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "existsByCelular", null);
__decorate([
    common_1.Get('page'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.PaginatedPessoa }),
    __param(0, common_1.Query('page', parse_int_pipe_1.ParseIntPipe)),
    __param(1, common_1.Query('limit', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findByPage", null);
__decorate([
    common_1.Get('all'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findAll", null);
__decorate([
    common_1.Get('random'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa, isArray: true }),
    __param(0, common_1.Query('length', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findRandom15", null);
__decorate([
    common_1.Get('exists/email/:email'),
    swagger_1.ApiResponse({ status: 200, type: Boolean }),
    __param(0, common_1.Param('email')),
    __param(1, common_1.Query('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "existsByEmail", null);
PessoaController = __decorate([
    common_1.Controller('pessoa'),
    with_auth_guard_decorator_1.WithAuthGuard(),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoaController);
exports.PessoaController = PessoaController;
//# sourceMappingURL=pessoa.controller.js.map
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
const update_history_pipe_1 = require("../auth/update-history.pipe");
const typeorm_1 = require("typeorm");
const pessoa_service_1 = require("./pessoa.service");
const add_1 = require("./dto/add");
const pessoa_entity_1 = require("./pessoa.entity");
const update_1 = require("./dto/update");
const tipo_pessoa_enum_1 = require("./tipo-pessoa.enum");
const parse_int_pipe_1 = require("../shared/pipe/parse-int-pipe");
const passport_1 = require("@nestjs/passport");
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
    async findByParams(term, tipo) {
        return this.pessoaService.findByParams(term, tipo);
    }
    async findByTipo(tipo) {
        return this.pessoaService.findByTipo(tipo);
    }
    async existsByTelefone(celular, id) {
        return this.pessoaService.existsByCelular(celular, id);
    }
    async findSimilarBairro(bairro) {
        return this.pessoaService.findSimilarBairro(bairro);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa }),
    __param(0, common_1.Body(common_1.ValidationPipe, update_history_pipe_1.UpdateHistoryPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_1.PessoaAddDto]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "add", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiResponse({ status: 200, type: typeorm_1.UpdateResult }),
    __param(0, common_1.Body(common_1.ValidationPipe, update_history_pipe_1.UpdateHistoryPipe)),
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
    common_1.Get('/search'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa, isArray: true }),
    swagger_1.ApiQuery({ name: 'tipo', enum: tipo_pessoa_enum_1.TipoPessoaEnum }),
    __param(0, common_1.Query('term')),
    __param(1, common_1.Query('tipo', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findByParams", null);
__decorate([
    common_1.Get('/tipo/:tipo'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_entity_1.Pessoa, isArray: true }),
    swagger_1.ApiParam({ name: 'tipo', enum: tipo_pessoa_enum_1.TipoPessoaEnum }),
    __param(0, common_1.Param('tipo', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findByTipo", null);
__decorate([
    common_1.Get('/celular/:celular'),
    swagger_1.ApiResponse({ status: 200, type: Boolean }),
    __param(0, common_1.Param('celular')),
    __param(1, common_1.Query('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "existsByTelefone", null);
__decorate([
    common_1.Get('/similarity/bairro/:bairro'),
    swagger_1.ApiResponse({ status: 200, type: String, isArray: true }),
    __param(0, common_1.Param('bairro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findSimilarBairro", null);
PessoaController = __decorate([
    common_1.Controller('pessoa'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoaController);
exports.PessoaController = PessoaController;
//# sourceMappingURL=pessoa.controller.js.map
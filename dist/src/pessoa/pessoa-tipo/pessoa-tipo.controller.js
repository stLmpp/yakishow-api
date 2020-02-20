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
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const pessoa_tipo_service_1 = require("./pessoa-tipo.service");
const add_1 = require("./dto/add");
const pessoa_tipo_entity_1 = require("./pessoa-tipo.entity");
const parse_int_pipe_1 = require("../../shared/pipe/parse-int-pipe");
const parse_array_pipe_1 = require("../../shared/pipe/parse-array.pipe");
let PessoaTipoController = class PessoaTipoController {
    constructor(pessoaTipoService) {
        this.pessoaTipoService = pessoaTipoService;
    }
    async add(dto) {
        return this.pessoaTipoService.add(dto);
    }
    async remove(ids) {
        return this.pessoaTipoService.remove(ids);
    }
    async findByPessoaId(pessoaId, notTipoPessoaIds) {
        return this.pessoaTipoService.findByPessoaId(pessoaId, notTipoPessoaIds);
    }
};
__decorate([
    common_1.Put(),
    swagger_1.ApiResponse({ status: 200, type: add_1.PessoaTipoAddDto }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_1.PessoaTipoAddDto]),
    __metadata("design:returntype", Promise)
], PessoaTipoController.prototype, "add", null);
__decorate([
    common_1.Delete(),
    swagger_1.ApiResponse({ status: 200, type: typeorm_1.DeleteResult }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PessoaTipoController.prototype, "remove", null);
__decorate([
    common_1.Get('pessoaId/:pessoaId'),
    swagger_1.ApiResponse({ status: 200, type: pessoa_tipo_entity_1.PessoaTipo, isArray: true }),
    __param(0, common_1.Param('pessoaId', parse_int_pipe_1.ParseIntPipe)),
    __param(1, common_1.Query('notTipoPessoaIds', new parse_array_pipe_1.ParseArrayPipe('number'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], PessoaTipoController.prototype, "findByPessoaId", null);
PessoaTipoController = __decorate([
    common_1.Controller('pessoa-tipo'),
    __metadata("design:paramtypes", [pessoa_tipo_service_1.PessoaTipoService])
], PessoaTipoController);
exports.PessoaTipoController = PessoaTipoController;
//# sourceMappingURL=pessoa-tipo.controller.js.map
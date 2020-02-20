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
const typeorm_1 = require("@nestjs/typeorm");
const pessoa_tipo_repository_1 = require("./pessoa-tipo.repository");
const typeorm_2 = require("typeorm");
const my_sql_error_1 = require("../../shared/error/my-sql-error");
let PessoaTipoService = class PessoaTipoService {
    constructor(pessoaTipoRepository) {
        this.pessoaTipoRepository = pessoaTipoRepository;
    }
    async add(dto) {
        try {
            return await this.pessoaTipoRepository.save(dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar salvar o tipo');
        }
    }
    async addBatch(dto) {
        try {
            return await this.pessoaTipoRepository.save(dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar salvar os tipos');
        }
    }
    async remove(ids) {
        try {
            return await this.pessoaTipoRepository.delete(ids);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar deletar o tipo');
        }
    }
    async findByPessoaId(pessoaId, notTipoPessoaIds) {
        var _a;
        const where = { pessoaId };
        if ((_a = notTipoPessoaIds) === null || _a === void 0 ? void 0 : _a.length) {
            where.tipoPessoaId = typeorm_2.Not(typeorm_2.In(notTipoPessoaIds));
        }
        return await this.pessoaTipoRepository.find({ where });
    }
};
PessoaTipoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pessoa_tipo_repository_1.PessoaTipoRepository)),
    __metadata("design:paramtypes", [pessoa_tipo_repository_1.PessoaTipoRepository])
], PessoaTipoService);
exports.PessoaTipoService = PessoaTipoService;
//# sourceMappingURL=pessoa-tipo.service.js.map
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
const typeorm_2 = require("typeorm");
const my_sql_error_1 = require("../shared/error/my-sql-error");
const pessoa_repository_1 = require("./pessoa.repository");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const pessoa_tipo_service_1 = require("./pessoa-tipo/pessoa-tipo.service");
let PessoaService = class PessoaService {
    constructor(pessoaRepository, pessoaTipoService) {
        this.pessoaRepository = pessoaRepository;
        this.pessoaTipoService = pessoaTipoService;
    }
    async add(dto) {
        try {
            return await this.pessoaRepository.save(dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar inserir a pessoa');
        }
    }
    async update(id, dto) {
        var _a, _b, _c;
        try {
            dto.id = id;
            if ((_a = dto.tipos) === null || _a === void 0 ? void 0 : _a.length) {
                dto.tipos = dto.tipos.map(tipo => (Object.assign(Object.assign({}, tipo), { pessoaId: id })));
                const removeTipos = (_c = (_b = (await this.pessoaTipoService.findByPessoaId(id, dto.tipos.map(o => o.tipoPessoaId)))) === null || _b === void 0 ? void 0 : _b.map(o => o.id), (_c !== null && _c !== void 0 ? _c : []));
                if (removeTipos.length) {
                    await this.pessoaTipoService.remove(removeTipos);
                }
            }
            return await this.pessoaRepository.save(dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar atualizar a pessoa');
        }
    }
    async findById(id) {
        try {
            return await this.pessoaRepository.findOneOrFail(id, {
                relations: ['tipos'],
            });
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Pessoa não encontrado!');
        }
    }
    async findByParams(term, tipos) {
        return await this.pessoaRepository.findByParams(term, tipos);
    }
    async findByTipos(tipos) {
        return await this.pessoaRepository.find({
            take: 20,
            where: { tipos: typeorm_2.In(tipos) },
            relations: ['tipos'],
        });
    }
    async existsByCelular(celular, id) {
        const findConditions = { celular };
        if (id)
            findConditions.id = typeorm_2.Not(id);
        return await this.pessoaRepository.exists(findConditions);
    }
    async findByPage(options) {
        return await nestjs_typeorm_paginate_1.paginate(this.pessoaRepository, options);
    }
    async findAll() {
        return await this.pessoaRepository.find();
    }
    async findRandom(length) {
        return await this.pessoaRepository.findRandom(length);
    }
    async existsByEmail(email, id) {
        const findConditions = { email };
        if (id)
            findConditions.id = id;
        return await this.pessoaRepository.exists(findConditions);
    }
};
PessoaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pessoa_repository_1.PessoaRepository)),
    __metadata("design:paramtypes", [pessoa_repository_1.PessoaRepository,
        pessoa_tipo_service_1.PessoaTipoService])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map
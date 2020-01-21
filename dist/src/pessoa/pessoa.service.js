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
const tipo_pessoa_enum_1 = require("./tipo-pessoa.enum");
let PessoaService = class PessoaService {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
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
        try {
            return await this.pessoaRepository.update(id, dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar atualziar a pessoa');
        }
    }
    async findById(id) {
        try {
            return await this.pessoaRepository.findOneOrFail(id);
        }
        catch (err) {
            throw new common_1.NotFoundException('Pessoa não encontrado!');
        }
    }
    async findByParams(term, tipo) {
        let _tipo = {};
        if (tipo !== tipo_pessoa_enum_1.TipoPessoaEnum.todos)
            _tipo = { tipo };
        term = `%${term}%`;
        return await this.pessoaRepository.find({
            where: [Object.assign({ celular: typeorm_2.Like(term) }, _tipo), { nome: typeorm_2.Like(term) }],
        });
    }
    async findByTipo(tipo) {
        let options = {};
        if (tipo !== tipo_pessoa_enum_1.TipoPessoaEnum.todos)
            options = { where: { tipo }, take: 15 };
        return await this.pessoaRepository.find(options);
    }
    async existsByCelular(celular, id) {
        const findConditions = { celular };
        if (id)
            findConditions.id = typeorm_2.Not(id);
        return await this.pessoaRepository.exists(findConditions);
    }
    async findSimilarBairro(bairro) {
        return await this.pessoaRepository.findSimilarBairro(bairro);
    }
};
PessoaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pessoa_repository_1.PessoaRepository)),
    __metadata("design:paramtypes", [pessoa_repository_1.PessoaRepository])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map
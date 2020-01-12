"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const pessoa_entity_1 = require("./pessoa.entity");
const tipo_pessoa_enum_1 = require("./tipo-pessoa.enum");
const repository_custom_1 = require("../shared/types/repository-custom");
const my_sql_functions_1 = require("../shared/my-sql-functions");
let PessoaRepository = class PessoaRepository extends repository_custom_1.RepositoryCustom {
    async findByParams(term, tipo) {
        const queryBuilder = this.createQueryBuilder('pessoa').andWhere('(pessoa.telefone like :term or upper(pessoa.nome) like upper(:term))', { term: term ? `%${term}%` : term });
        if (tipo !== tipo_pessoa_enum_1.TipoPessoaEnum.todos) {
            queryBuilder.andWhere('pessoa.tipo = pessoa.tipo', { tipo });
        }
        return queryBuilder.limit(15).getMany();
    }
    async findSimilarBairro(bairro) {
        const queryBuilder = this.createQueryBuilder('pessoa')
            .distinct(true)
            .select('bairro')
            .andWhere(`${my_sql_functions_1.levenshteinRatio(':bairro', 'pessoa.bairro')} >= 70`, {
            bairro,
        })
            .limit(8);
        const pessoas = await queryBuilder.getMany();
        return pessoas.map(pessoa => pessoa.bairro);
    }
};
PessoaRepository = __decorate([
    typeorm_1.EntityRepository(pessoa_entity_1.Pessoa)
], PessoaRepository);
exports.PessoaRepository = PessoaRepository;
//# sourceMappingURL=pessoa.repository.js.map
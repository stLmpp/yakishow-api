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
const repository_custom_1 = require("../shared/types/repository-custom");
const pessoa_tipo_entity_1 = require("./pessoa-tipo/pessoa-tipo.entity");
let PessoaRepository = class PessoaRepository extends repository_custom_1.RepositoryCustom {
    async findRandom(length = 20) {
        return this.createQueryBuilder('pessoa')
            .innerJoinAndSelect('pessoa.tipos', 'pessoaTipo')
            .orderBy('rand()')
            .limit(length)
            .getMany();
    }
    async findByParams(term, tipos) {
        var _a;
        const qb = this.createQueryBuilder('pessoa')
            .innerJoinAndSelect('pessoa.tipos', 'tipos')
            .limit(20);
        if (term) {
            qb.andWhere(`(upper(pessoa.nome) like upper(:term) or upper(pessoa.celular) like upper(:term))`, { term: `%${term}%` });
        }
        if ((_a = tipos) === null || _a === void 0 ? void 0 : _a.length) {
            qb.andWhere(sbq => {
                const subQuery = sbq
                    .subQuery()
                    .addSelect('1')
                    .from(pessoa_tipo_entity_1.PessoaTipo, 'pt')
                    .andWhere('pt.pessoaId = pessoa.id')
                    .andWhere('pt.tipoPessoaId in (:...tipos)', { tipos })
                    .getQuery();
                return `EXISTS ${subQuery}`;
            });
        }
        return qb.getMany();
    }
};
PessoaRepository = __decorate([
    typeorm_1.EntityRepository(pessoa_entity_1.Pessoa)
], PessoaRepository);
exports.PessoaRepository = PessoaRepository;
//# sourceMappingURL=pessoa.repository.js.map
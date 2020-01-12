"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const produto_entity_1 = require("./produto.entity");
let ProdutoRepository = class ProdutoRepository extends typeorm_1.Repository {
    async findByDescricao(descricao) {
        const params = { descricao: `%${descricao}%` };
        return this.createQueryBuilder('produto')
            .andWhere('upper(produto.descricao) like upper(:descricao)', params)
            .getMany();
    }
};
ProdutoRepository = __decorate([
    typeorm_1.EntityRepository(produto_entity_1.Produto)
], ProdutoRepository);
exports.ProdutoRepository = ProdutoRepository;
//# sourceMappingURL=produto.repository.js.map
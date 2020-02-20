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
const produto_repository_1 = require("./produto.repository");
const typeorm_1 = require("@nestjs/typeorm");
const my_sql_error_1 = require("../shared/error/my-sql-error");
let ProdutoService = class ProdutoService {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async add(dto) {
        try {
            return await this.produtoRepository.save(dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar inserir o produto');
        }
    }
    async update(id, dto) {
        try {
            return await this.produtoRepository.update(id, dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar atualizar o produto');
        }
    }
    async findById(id) {
        try {
            return await this.produtoRepository.findOneOrFail(id);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Produto não encontrado');
        }
    }
    async findByCodigo(codigo) {
        try {
            return await this.produtoRepository.findOneOrFail({ codigo });
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Produto não encontrado');
        }
    }
    async findByDescricao(descricao) {
        return await this.produtoRepository.findByDescricao(descricao);
    }
};
ProdutoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(produto_repository_1.ProdutoRepository)),
    __metadata("design:paramtypes", [produto_repository_1.ProdutoRepository])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map
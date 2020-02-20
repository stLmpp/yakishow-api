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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const common_history_1 = require("../shared/super-entities/common-history");
const swagger_1 = require("@nestjs/swagger");
const paginated_entity_1 = require("../shared/types/paginated-entity");
const pessoa_tipo_entity_1 = require("./pessoa-tipo/pessoa-tipo.entity");
let Pessoa = class Pessoa extends common_history_1.CommonHistory {
    constructor(partial) {
        super();
        Object.assign(this, partial);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Pessoa.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({
        length: 11,
        unique: true,
        nullable: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "celular", void 0);
__decorate([
    typeorm_1.Column({
        length: 10,
        nullable: true,
    }),
    __metadata("design:type", String)
], Pessoa.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column({
        length: 500,
        nullable: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "shortEndereco", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "bairro", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "rua", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Pessoa.prototype, "numero", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "complemento", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "cep", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        unique: true,
    }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Pessoa.prototype, "email", void 0);
__decorate([
    typeorm_1.OneToMany(() => pessoa_tipo_entity_1.PessoaTipo, tipo => tipo.pessoa, { cascade: true }),
    typeorm_1.JoinColumn(),
    swagger_1.ApiProperty({ isArray: true, type: pessoa_tipo_entity_1.PessoaTipo }),
    __metadata("design:type", Array)
], Pessoa.prototype, "tipos", void 0);
Pessoa = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Pessoa);
exports.Pessoa = Pessoa;
class PaginatedPessoa extends paginated_entity_1.PaginatedEntity {
}
__decorate([
    swagger_1.ApiProperty({ isArray: true, type: Pessoa }),
    __metadata("design:type", Array)
], PaginatedPessoa.prototype, "items", void 0);
exports.PaginatedPessoa = PaginatedPessoa;
//# sourceMappingURL=pessoa.entity.js.map
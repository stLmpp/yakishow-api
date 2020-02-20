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
const common_history_1 = require("../../shared/super-entities/common-history");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const pessoa_entity_1 = require("../pessoa.entity");
const tipo_pessoa_entity_1 = require("../tipo-pessoa/tipo-pessoa.entity");
let PessoaTipo = class PessoaTipo extends common_history_1.CommonHistory {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PessoaTipo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PessoaTipo.prototype, "pessoaId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => pessoa_entity_1.Pessoa, pessoa => pessoa.tipos),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], PessoaTipo.prototype, "pessoa", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PessoaTipo.prototype, "tipoPessoaId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => tipo_pessoa_entity_1.TipoPessoa),
    __metadata("design:type", tipo_pessoa_entity_1.TipoPessoa)
], PessoaTipo.prototype, "tipoPessoa", void 0);
PessoaTipo = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Index(['tipoPessoaId', 'pessoaId'], { unique: true })
], PessoaTipo);
exports.PessoaTipo = PessoaTipo;
//# sourceMappingURL=pessoa-tipo.entity.js.map
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
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const tipo_pessoa_enum_1 = require("../tipo-pessoa.enum");
class PessoaUpdateDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(255),
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "nome", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(12),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "celular", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(10),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "telefone", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(500),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "shortEndereco", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(255),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "bairro", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(255),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "rua", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    class_validator_1.MaxLength(255),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", Number)
], PessoaUpdateDto.prototype, "numero", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(255),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "complemento", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "cep", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.MaxLength(255),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], PessoaUpdateDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(tipo_pessoa_enum_1.TipoPessoaEnum),
    swagger_1.ApiProperty({
        enum: tipo_pessoa_enum_1.TipoPessoaEnum,
        required: false,
    }),
    __metadata("design:type", Number)
], PessoaUpdateDto.prototype, "tipo", void 0);
exports.PessoaUpdateDto = PessoaUpdateDto;
//# sourceMappingURL=update.js.map
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
const update_1 = require("../pessoa-tipo/dto/update");
class PessoaAddDto {
}
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "nome", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(12),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "celular", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    class_validator_1.MaxLength(10),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "telefone", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.MaxLength(500),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "shortEndereco", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "bairro", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "rua", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], PessoaAddDto.prototype, "numero", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "complemento", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "cep", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsEmail(),
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], PessoaAddDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsArray(),
    swagger_1.ApiProperty({ type: update_1.PessoaTipoUpdateDto, isArray: true }),
    class_validator_1.ArrayNotEmpty(),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], PessoaAddDto.prototype, "tipos", void 0);
exports.PessoaAddDto = PessoaAddDto;
//# sourceMappingURL=add.js.map
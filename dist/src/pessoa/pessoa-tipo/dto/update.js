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
class PessoaTipoUpdateDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PessoaTipoUpdateDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PessoaTipoUpdateDto.prototype, "pessoaId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsDefined(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PessoaTipoUpdateDto.prototype, "tipoPessoaId", void 0);
exports.PessoaTipoUpdateDto = PessoaTipoUpdateDto;
//# sourceMappingURL=update.js.map
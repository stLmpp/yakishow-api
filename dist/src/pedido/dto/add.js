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
const pedido_status_enum_1 = require("../pedido-status.enum");
const swagger_1 = require("@nestjs/swagger");
const add_1 = require("../pedido-item/dto/add");
class PedidoAddDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDate(),
    swagger_1.ApiProperty({
        type: String,
        description: 'Date',
        required: false,
    }),
    __metadata("design:type", Date)
], PedidoAddDto.prototype, "dataInicio", void 0);
__decorate([
    class_validator_1.IsEnum(pedido_status_enum_1.PedidoStatusEnum),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({
        enum: pedido_status_enum_1.PedidoStatusEnum,
        required: false,
    }),
    __metadata("design:type", Number)
], PedidoAddDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsDefined(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PedidoAddDto.prototype, "clienteId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", Number)
], PedidoAddDto.prototype, "entregadorId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    swagger_1.ApiProperty({
        type: add_1.PedidoItemAddDto,
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], PedidoAddDto.prototype, "pedidoItems", void 0);
exports.PedidoAddDto = PedidoAddDto;
//# sourceMappingURL=add.js.map
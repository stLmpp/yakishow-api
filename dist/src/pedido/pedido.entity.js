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
const common_history_1 = require("../shared/super-entities/common-history");
const typeorm_1 = require("typeorm");
const pessoa_entity_1 = require("../pessoa/pessoa.entity");
const swagger_1 = require("@nestjs/swagger");
const pedido_status_enum_1 = require("./pedido-status.enum");
const pedido_item_entity_1 = require("./pedido-item/pedido-item.entity");
let Pedido = class Pedido extends common_history_1.CommonHistory {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ enum: pedido_status_enum_1.PedidoStatusEnum }),
    __metadata("design:type", Number)
], Pedido.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String, description: 'Date' }),
    __metadata("design:type", Date)
], Pedido.prototype, "dataInicio", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    swagger_1.ApiProperty({ type: String, description: 'Date' }),
    __metadata("design:type", Date)
], Pedido.prototype, "dataFinalizado", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Pedido.prototype, "clienteId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => pessoa_entity_1.Pessoa),
    typeorm_1.JoinColumn(),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], Pedido.prototype, "cliente", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Pedido.prototype, "entregadorId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => pessoa_entity_1.Pessoa),
    typeorm_1.JoinColumn(),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], Pedido.prototype, "entregador", void 0);
__decorate([
    typeorm_1.OneToMany(() => pedido_item_entity_1.PedidoItem, item => item.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "pedidoItems", void 0);
Pedido = __decorate([
    typeorm_1.Entity()
], Pedido);
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.entity.js.map
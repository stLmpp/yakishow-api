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
const common_history_1 = require("../../shared/super-entities/common-history");
const swagger_1 = require("@nestjs/swagger");
const produto_entity_1 = require("../../produto/produto.entity");
const pedido_entity_1 = require("../pedido.entity");
let PedidoItem = class PedidoItem extends common_history_1.CommonHistory {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PedidoItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PedidoItem.prototype, "produtoId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => produto_entity_1.Produto),
    typeorm_1.JoinColumn(),
    __metadata("design:type", produto_entity_1.Produto)
], PedidoItem.prototype, "produto", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PedidoItem.prototype, "pedidoId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => pedido_entity_1.Pedido, pedido => pedido.pedidoItems),
    typeorm_1.JoinColumn(),
    __metadata("design:type", pedido_entity_1.Pedido)
], PedidoItem.prototype, "pedido", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, nullable: true }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PedidoItem.prototype, "total", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PedidoItem.prototype, "quantidade", void 0);
PedidoItem = __decorate([
    typeorm_1.Entity()
], PedidoItem);
exports.PedidoItem = PedidoItem;
//# sourceMappingURL=pedido-item.entity.js.map
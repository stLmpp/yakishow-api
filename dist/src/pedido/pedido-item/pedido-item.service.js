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
const pedido_item_repository_1 = require("./pedido-item.repository");
const typeorm_1 = require("@nestjs/typeorm");
const my_sql_error_1 = require("../../shared/error/my-sql-error");
let PedidoItemService = class PedidoItemService {
    constructor(pedidoItemRepository) {
        this.pedidoItemRepository = pedidoItemRepository;
    }
    async addBatch(idPedido, dto) {
        try {
            return await this.pedidoItemRepository.save(dto.map(item => {
                item.pedidoId = idPedido;
                return item;
            }));
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar adicionar os items no pedido');
        }
    }
    async add(idPedido, dto) {
        dto.pedidoId = idPedido;
        try {
            return await this.pedidoItemRepository.save(dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar adicionar o item no pedido');
        }
    }
    async updateBatch(dto) {
        try {
            const updateResults = [];
            let index = dto.length;
            while (index--) {
                const dtoAtual = dto[index];
                updateResults.push(await this.pedidoItemRepository.update(dtoAtual.id, dtoAtual));
            }
            return updateResults;
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar atualizar os items do pedido');
        }
    }
    async update(idPedidoItem, dto) {
        try {
            return await this.pedidoItemRepository.update(idPedidoItem, dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar atualizar o item do pedido');
        }
    }
};
PedidoItemService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pedido_item_repository_1.PedidoItemRepository)),
    __metadata("design:paramtypes", [pedido_item_repository_1.PedidoItemRepository])
], PedidoItemService);
exports.PedidoItemService = PedidoItemService;
//# sourceMappingURL=pedido-item.service.js.map
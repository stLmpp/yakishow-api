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
const pedido_repository_1 = require("./pedido.repository");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_status_enum_1 = require("./pedido-status.enum");
const pedido_item_repository_1 = require("./pedido-item/pedido-item.repository");
const my_sql_error_1 = require("../shared/error/my-sql-error");
let PedidoService = class PedidoService {
    constructor(pedidoRepository, pedidoItemRepository) {
        this.pedidoRepository = pedidoRepository;
        this.pedidoItemRepository = pedidoItemRepository;
    }
    async add(dto) {
        if (!dto.dataInicio)
            dto.dataInicio = new Date();
        if (!dto.status)
            dto.status = pedido_status_enum_1.PedidoStatusEnum.pendente;
        try {
            const pedido = await this.pedidoRepository.save(dto);
            if (dto.pedidoItems && dto.pedidoItems.length) {
                pedido.pedidoItems = await this.pedidoItemRepository.save(dto.pedidoItems.map(pedidoItem => {
                    pedidoItem.pedidoId = pedido.id;
                    return pedidoItem;
                }));
            }
            return pedido;
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar salvar o pedido');
        }
    }
    async update(id, dto) {
        if (dto.dataFinalizado) {
            const pedido = await this.pedidoRepository.findOne(id);
            if (pedido.dataInicio && pedido.dataInicio < dto.dataFinalizado) {
                throw new common_1.BadRequestException('Data finalizado deve ser maior que data de inicio');
            }
        }
        try {
            return await this.pedidoRepository.update(id, dto);
        }
        catch (err) {
            throw my_sql_error_1.mySQLError(err, 'Erro ao tentar atualizar o pedido');
        }
    }
    async findByStatus(status) {
        return await this.pedidoRepository.find({
            relations: ['pedidoItems'],
            where: { status },
        });
    }
};
PedidoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pedido_repository_1.PedidoRepository)),
    __param(1, typeorm_1.InjectRepository(pedido_item_repository_1.PedidoItemRepository)),
    __metadata("design:paramtypes", [pedido_repository_1.PedidoRepository,
        pedido_item_repository_1.PedidoItemRepository])
], PedidoService);
exports.PedidoService = PedidoService;
//# sourceMappingURL=pedido.service.js.map
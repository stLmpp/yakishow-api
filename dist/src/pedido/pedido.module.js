"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const pedido_service_1 = require("./pedido.service");
const pedido_controller_1 = require("./pedido.controller");
const auth_module_1 = require("../auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_repository_1 = require("./pedido.repository");
const pedido_item_repository_1 = require("./pedido-item/pedido-item.repository");
const pedido_item_service_1 = require("./pedido-item/pedido-item.service");
const pedido_item_controller_1 = require("./pedido-item/pedido-item.controller");
let PedidoModule = class PedidoModule {
};
PedidoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pedido_repository_1.PedidoRepository, pedido_item_repository_1.PedidoItemRepository]),
            auth_module_1.AuthModule,
        ],
        providers: [pedido_service_1.PedidoService, pedido_item_service_1.PedidoItemService],
        controllers: [pedido_controller_1.PedidoController, pedido_item_controller_1.PedidoItemController],
    })
], PedidoModule);
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=pedido.module.js.map
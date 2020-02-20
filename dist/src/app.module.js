"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const db_config_1 = require("./config/db.config");
const auth_module_1 = require("./auth/auth.module");
const produto_module_1 = require("./produto/produto.module");
const pessoa_module_1 = require("./pessoa/pessoa.module");
const pedido_module_1 = require("./pedido/pedido.module");
const app_controller_1 = require("./app.controller");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const external_module_1 = require("./external/external.module");
const core_1 = require("@nestjs/core");
const create_instance_pipe_1 = require("./shared/pipe/create-instance.pipe");
const destroy_instance_interceptor_1 = require("./shared/interceptors/destroy-instance.interceptor");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', '..', '..', 'client', 'dist'),
            }),
            typeorm_1.TypeOrmModule.forRoot(db_config_1.DB_TYPEORM_CONFIG),
            auth_module_1.AuthModule,
            produto_module_1.ProdutoModule,
            pessoa_module_1.PessoaModule,
            pedido_module_1.PedidoModule,
            external_module_1.ExternalModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useClass: create_instance_pipe_1.CreateInstancePipe,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: destroy_instance_interceptor_1.DestroyInstanceInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
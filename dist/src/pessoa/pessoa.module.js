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
const pessoa_repository_1 = require("./pessoa.repository");
const pessoa_service_1 = require("./pessoa.service");
const pessoa_controller_1 = require("./pessoa.controller");
const auth_module_1 = require("../auth/auth.module");
const tipo_pessoa_repository_1 = require("./tipo-pessoa/tipo-pessoa.repository");
const tipo_pessoa_service_1 = require("./tipo-pessoa/tipo-pessoa.service");
const tipo_pessoa_controller_1 = require("./tipo-pessoa/tipo-pessoa.controller");
const pessoa_tipo_controller_1 = require("./pessoa-tipo/pessoa-tipo.controller");
const pessoa_tipo_service_1 = require("./pessoa-tipo/pessoa-tipo.service");
const pessoa_tipo_repository_1 = require("./pessoa-tipo/pessoa-tipo.repository");
let PessoaModule = class PessoaModule {
};
PessoaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                pessoa_repository_1.PessoaRepository,
                tipo_pessoa_repository_1.TipoPessoaRepository,
                pessoa_tipo_repository_1.PessoaTipoRepository,
            ]),
            auth_module_1.AuthModule,
        ],
        providers: [pessoa_service_1.PessoaService, tipo_pessoa_service_1.TipoPessoaService, pessoa_tipo_service_1.PessoaTipoService],
        controllers: [pessoa_controller_1.PessoaController, tipo_pessoa_controller_1.TipoPessoaController, pessoa_tipo_controller_1.PessoaTipoController],
    })
], PessoaModule);
exports.PessoaModule = PessoaModule;
//# sourceMappingURL=pessoa.module.js.map
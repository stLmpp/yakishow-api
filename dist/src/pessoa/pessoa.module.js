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
let PessoaModule = class PessoaModule {
};
PessoaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([pessoa_repository_1.PessoaRepository]), auth_module_1.AuthModule],
        providers: [pessoa_service_1.PessoaService],
        controllers: [pessoa_controller_1.PessoaController],
    })
], PessoaModule);
exports.PessoaModule = PessoaModule;
//# sourceMappingURL=pessoa.module.js.map
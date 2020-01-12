"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env_1 = require("./util/env");
const swagger_1 = require("@nestjs/swagger");
const package_json_1 = require("../package.json");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (!env_1.isProd) {
        app.enableCors();
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Goals api')
            .setVersion(package_json_1.version)
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('help', app, document);
        app.setGlobalPrefix('api');
        app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    }
    await app.listen(3000);
}
bootstrap()
    .then(() => {
    console.log('Yakishow-api started!');
})
    .catch(error => {
    console.error(error);
});
//# sourceMappingURL=main.js.map
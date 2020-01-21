"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const lodash_es_1 = require("lodash-es");
const hash_1 = require("../util/hash");
class NamingStrategy extends typeorm_1.DefaultNamingStrategy {
    transform(name) {
        if (lodash_es_1.isArray(name))
            name = name.join('_');
        return lodash_es_1.snakeCase(name);
    }
    tableName(className, customName) {
        return customName ? customName : lodash_es_1.snakeCase(className);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return this.transform(embeddedPrefixes.join('_') +
            (customName ? customName : lodash_es_1.snakeCase(propertyName)));
    }
    joinColumnName(relationName, referencedColumnName) {
        return this.transform([
            lodash_es_1.snakeCase(relationName),
            lodash_es_1.snakeCase(referencedColumnName),
        ]);
    }
    constraint(type, tableOrName, columnsOrExpresion, add) {
        const expresion = lodash_es_1.isArray(columnsOrExpresion)
            ? [...columnsOrExpresion].sort().join('_')
            : columnsOrExpresion;
        const table = tableOrName instanceof typeorm_1.Table ? tableOrName.name : tableOrName;
        let name = this.transform(`${type}_${table.replace('.', '_')}_${expresion}${add ? '_' + add : ''}`);
        name += `_${hash_1.sha1(name)}`;
        return name.substring(0, 128);
    }
    checkConstraintName(tableOrName, expression) {
        return this.constraint('CHK', tableOrName, expression);
    }
    exclusionConstraintName(tableOrName, expression) {
        return this.constraint('XCL', tableOrName, expression);
    }
    uniqueConstraintName(tableOrName, columnNames) {
        return this.constraint('UQ', tableOrName, columnNames);
    }
    defaultConstraintName(tableOrName, columnName) {
        return this.constraint('DF', tableOrName, columnName);
    }
    relationConstraintName(tableOrName, columnNames, where) {
        return this.constraint('REL', tableOrName, columnNames, where);
    }
    primaryKeyName(tableOrName, columnNames) {
        return this.constraint('PK', tableOrName, columnNames);
    }
    foreignKeyName(tableOrName, columnNames, _referencedTablePath, _referencedColumnNames) {
        return this.constraint('FK', tableOrName, columnNames);
    }
    indexName(tableOrName, columnNames, where) {
        return this.constraint('IDX', tableOrName, columnNames, where);
    }
}
exports.NamingStrategy = NamingStrategy;
//# sourceMappingURL=naming.strategy.js.map
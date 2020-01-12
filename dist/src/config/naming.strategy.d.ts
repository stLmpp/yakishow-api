import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm';
declare type ConstraintType = 'PK' | 'UQ' | 'REL' | 'DF' | 'CHK' | 'XCL' | 'FK' | 'IDX';
export declare class NamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    transform(name: string | string[]): string;
    tableName(className: string, customName: string): string;
    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string;
    joinColumnName(relationName: string, referencedColumnName: string): string;
    constraint(type: ConstraintType, tableOrName: Table | string, columnsOrExpresion: string | string[], add?: string): string;
    checkConstraintName(tableOrName: Table | string, expression: string): string;
    exclusionConstraintName(tableOrName: Table | string, expression: string): string;
    uniqueConstraintName(tableOrName: Table | string, columnNames: string[]): string;
    defaultConstraintName(tableOrName: Table | string, columnName: string): string;
    relationConstraintName(tableOrName: Table | string, columnNames: string[], where?: string): string;
    primaryKeyName(tableOrName: Table | string, columnNames: string[]): string;
    foreignKeyName(tableOrName: Table | string, columnNames: string[], _referencedTablePath?: string, _referencedColumnNames?: string[]): string;
    indexName(tableOrName: Table | string, columnNames: string[], where?: string): string;
}
export {};

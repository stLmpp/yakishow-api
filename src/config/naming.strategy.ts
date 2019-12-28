import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm';
import { snakeCase, isArray } from 'lodash';
import { sha1 } from '../util/hash';

type ConstraintType = 'PK' | 'UQ' | 'REL' | 'DF' | 'CHK' | 'XCL' | 'FK' | 'IDX';

export class NamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  transform(name: string | string[]): string {
    if (isArray(name)) name = name.join('_');
    return snakeCase(name);
  }

  tableName(className: string, customName: string): string {
    return customName ? customName : snakeCase(className);
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    return this.transform(
      embeddedPrefixes.join('_') +
        (customName ? customName : snakeCase(propertyName)),
    );
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return this.transform([
      snakeCase(relationName),
      snakeCase(referencedColumnName),
    ]);
  }

  constraint(
    type: ConstraintType,
    tableOrName: Table | string,
    columnsOrExpresion: string | string[],
    add?: string,
  ): string {
    const expresion = isArray(columnsOrExpresion)
      ? [...columnsOrExpresion].sort().join('_')
      : columnsOrExpresion;
    const table = tableOrName instanceof Table ? tableOrName.name : tableOrName;
    let name = this.transform(
      `${type}_${table.replace('.', '_')}_${expresion}${add ? '_' + add : ''}`,
    );
    name += `_${sha1(name)}`;
    return name.substring(0, 128);
  }

  checkConstraintName(tableOrName: Table | string, expression: string): string {
    return this.constraint('CHK', tableOrName, expression);
  }

  exclusionConstraintName(
    tableOrName: Table | string,
    expression: string,
  ): string {
    return this.constraint('XCL', tableOrName, expression);
  }

  uniqueConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
  ): string {
    return this.constraint('UQ', tableOrName, columnNames);
  }

  defaultConstraintName(
    tableOrName: Table | string,
    columnName: string,
  ): string {
    return this.constraint('DF', tableOrName, columnName);
  }

  relationConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
    where?: string,
  ): string {
    return this.constraint('REL', tableOrName, columnNames, where);
  }

  primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
    return this.constraint('PK', tableOrName, columnNames);
  }

  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    _referencedTablePath?: string,
    _referencedColumnNames?: string[],
  ): string {
    return this.constraint('FK', tableOrName, columnNames);
  }

  indexName(
    tableOrName: Table | string,
    columnNames: string[],
    where?: string,
  ): string {
    return this.constraint('IDX', tableOrName, columnNames, where);
  }
}

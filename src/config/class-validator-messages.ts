import { ValidationArguments, ValidationTypes } from 'class-validator';

export function patchClassValidatorMessages(): void {
  const orig = ValidationTypes.getMessage.bind(ValidationTypes);
  ValidationTypes.getMessage = (
    type: string,
    isEach: boolean
  ): string | ((args: ValidationArguments) => string) => {
    const eachPrefix = isEach ? 'cada valor em ' : '';
    switch (type) {
      case ValidationTypes.NESTED_VALIDATION:
        return (
          eachPrefix +
          'a propriedade aninhada $property precisa ser um vetor ou um objeto'
        );
      case ValidationTypes.IS_DEFINED:
        return eachPrefix + '$property não pode ser nulo(a) ou indefinido(a)';
      case ValidationTypes.EQUALS:
        return eachPrefix + '$property precisa ser igual à $constraint1';
      case ValidationTypes.NOT_EQUALS:
        return eachPrefix + '$property não pode ser igual à $constraint1';
      case ValidationTypes.IS_EMPTY:
        return eachPrefix + '$property precisa ser vazio(a)';
      case ValidationTypes.IS_NOT_EMPTY:
        return eachPrefix + '$property não pode ser vazio(a)';
      case ValidationTypes.IS_IN:
        return (
          eachPrefix +
          '$property precisa ser um dos valores a seguir: $constraint1'
        );
      case ValidationTypes.IS_NOT_IN:
        return (
          eachPrefix +
          '$property não pode ser um dos valores a seguir: $constraint1'
        );
      case ValidationTypes.IS_PORT:
        return eachPrefix + '$property precisa ser uma porta';

      /* type checkers */
      case ValidationTypes.IS_BOOLEAN:
        return eachPrefix + '$property precisa ser um booleano';
      case ValidationTypes.IS_DATE:
        return eachPrefix + '$property precisa ser uma data';
      case ValidationTypes.IS_NUMBER:
        return (
          eachPrefix +
          '$property deve ser um número em conformidade com as restrições especificadas'
        );
      case ValidationTypes.IS_INT:
        return eachPrefix + '$property precisa ser um número inteiro';
      case ValidationTypes.IS_STRING:
        return eachPrefix + '$property precisa ser um texto';
      case ValidationTypes.IS_DATE_STRING:
        return eachPrefix + '$property precisa ser uma data (texto)';
      case ValidationTypes.IS_ARRAY:
        return eachPrefix + '$property precisa ser um vetor';
      case ValidationTypes.IS_ENUM:
        return eachPrefix + '$property precisa ser um enum valido';

      /* number checkers */
      case ValidationTypes.IS_DIVISIBLE_BY:
        return eachPrefix + '$property precisa ser divisível por $constraint1';
      case ValidationTypes.IS_POSITIVE:
        return eachPrefix + '$property precisa ser um número positivo';
      case ValidationTypes.IS_NEGATIVE:
        return eachPrefix + '$property precisa ser um número negativo';
      case ValidationTypes.MIN:
        return eachPrefix + '$property não pode ser menor que $constraint1';
      case ValidationTypes.MAX:
        return eachPrefix + '$property não pode ser maior que $constraint1';

      /* date checkers */
      case ValidationTypes.MIN_DATE:
        return (
          'data mínima permitida para ' +
          eachPrefix +
          '$property é $constraint1'
        );
      case ValidationTypes.MAX_DATE:
        return (
          'data máxima permitida para ' +
          eachPrefix +
          '$property é $constraint1'
        );

      /* string-as-type checkers */
      case ValidationTypes.IS_BOOLEAN_STRING:
        return eachPrefix + '$property precisa ser um booleano (texto)';
      case ValidationTypes.IS_NUMBER_STRING:
        return eachPrefix + '$property precisa ser um número (texto)';

      /* string checkers */
      case ValidationTypes.CONTAINS:
        return eachPrefix + '$property precisa conter $constraint1';
      case ValidationTypes.NOT_CONTAINS:
        return eachPrefix + '$property não pode conter $constraint1';
      case ValidationTypes.IS_ALPHA:
        return eachPrefix + '$property precisa conter apenas letras';
      case ValidationTypes.IS_ALPHANUMERIC:
        return eachPrefix + '$property precisa conter apenas letras e números';
      case ValidationTypes.IS_DECIMAL:
        return eachPrefix + '$property não é um número decimal válido.';
      case ValidationTypes.IS_ASCII:
        return eachPrefix + '$property precisa conter apenas caracteres ASCII';
      case ValidationTypes.IS_BASE64:
        return eachPrefix + '$property precisa ser codificado em base64';
      case ValidationTypes.IS_BYTE_LENGTH:
        return `${eachPrefix}o tamanho dos bytes de $property deve estar entre $constraint1 e  $constraint2`;
      case ValidationTypes.IS_CREDIT_CARD:
        return eachPrefix + '$property precisa ser um cartão de crédito';
      case ValidationTypes.IS_CURRENCY:
        return eachPrefix + '$property precisa ser uma moeda';
      case ValidationTypes.IS_EMAIL:
        return eachPrefix + '$property precisa ser um e-mail';
      case ValidationTypes.IS_FQDN:
        return eachPrefix + '$property precisa ser um nome de domínio válido';
      case ValidationTypes.IS_FULL_WIDTH:
        return (
          eachPrefix + '$property precisa conter caracteres de largura total'
        );
      case ValidationTypes.IS_HALF_WIDTH:
        return (
          eachPrefix + '$property precisa conter caracteres de meia largura'
        );
      case ValidationTypes.IS_VARIABLE_WIDTH:
        return (
          eachPrefix +
          '$property precisa conter caracteres de meia largura e largura total'
        );
      case ValidationTypes.IS_HEX_COLOR:
        return eachPrefix + '$property precisa ser uma cor hexadecimal';
      case ValidationTypes.IS_HEXADECIMAL:
        return eachPrefix + '$property precisa ser um número haxadecimal';
      case ValidationTypes.IS_MAC_ADDRESS:
        return eachPrefix + '$property precisa ser um endereço MAC';
      case ValidationTypes.IS_IP:
        return eachPrefix + '$property precisa ser um endereço IP';
      case ValidationTypes.IS_ISBN:
        return eachPrefix + '$property precisa ser um ISBN';
      case ValidationTypes.IS_ISIN:
        return eachPrefix + '$property precisa ser um ISIN';
      case ValidationTypes.IS_ISO8601:
        return (
          eachPrefix + '$property precisa ser uma data no formata ISO 8601'
        );
      case ValidationTypes.IS_JSON:
        return eachPrefix + '$property precisa ser um JSON (texto)';
      case ValidationTypes.IS_JWT:
        return eachPrefix + '$property precisa ser um JWT (texto)';
      case ValidationTypes.IS_OBJECT:
        return eachPrefix + '$property precisa ser um objeto';
      case ValidationTypes.IS_NOT_EMPTY_OBJECT:
        return eachPrefix + '$property precisa ser um objeto não vazio';
      case ValidationTypes.IS_LOWERCASE:
        return eachPrefix + '$property precisa ser um texto minusculo';
      case ValidationTypes.IS_MOBILE_PHONE:
        return eachPrefix + '$property precisa ser um número de celular válido';
      case ValidationTypes.IS_PHONE_NUMBER:
        return (
          eachPrefix + '$property precisa ser um número de telefone válido'
        );
      case ValidationTypes.IS_ISO31661_ALPHA_2:
        return (
          eachPrefix + '$property precisa ser um código Alpha2 ISO031661 válido'
        );
      case ValidationTypes.IS_ISO31661_ALPHA_3:
        return (
          eachPrefix + '$property precisa ser um código Alpha3 ISO031661 válido'
        );
      case ValidationTypes.IS_LATLONG:
        return (
          eachPrefix + '$property precisa ser um texto de latitude e longitude'
        );
      case ValidationTypes.IS_LATITUDE:
        return (
          eachPrefix + '$property precisa ser uma latitude (número ou texto)'
        );
      case ValidationTypes.IS_LONGITUDE:
        return (
          eachPrefix + '$property precisa ser uma longitude (número ou texto)'
        );
      case ValidationTypes.IS_MONGO_ID:
        return eachPrefix + '$property precisa ser um id mongodb';
      case ValidationTypes.IS_MULTIBYTE:
        return (
          eachPrefix +
          '$property precisa conter um ou mais caracteres multibyte'
        );
      case ValidationTypes.IS_SURROGATE_PAIR:
        return (
          eachPrefix +
          '$property precisa conter quaisquer caracteres substitutos de pares'
        );
      case ValidationTypes.IS_URL:
        return eachPrefix + '$property precisa ser um endereço URL';
      case ValidationTypes.IS_UUID:
        return eachPrefix + '$property precisa ser um UUID';
      case ValidationTypes.IS_UPPERCASE:
        return eachPrefix + '$property precisa ser maiúsculo';
      case ValidationTypes.LENGTH:
        return (args: ValidationArguments) => {
          const isMinLength =
            args.constraints[0] !== null && args.constraints[0] !== undefined;
          const isMaxLength =
            args.constraints[1] !== null && args.constraints[1] !== undefined;
          if (
            isMinLength &&
            (!args.value ?? args.value.length < args.constraints[0])
          ) {
            return (
              eachPrefix +
              '$property precisa ser maior ou igual à $constraint1 caracteres'
            );
          } else if (isMaxLength && args.value.length > args.constraints[1]) {
            return (
              eachPrefix +
              '$property precisa ser menor ou igual à $constraint2 caracteres'
            );
          }
          return (
            eachPrefix +
            '$property precisa ser maior ou igual à $constraint1 e menor ou igual à $constraint2 caracteres'
          );
        };
      case ValidationTypes.MIN_LENGTH:
        return (
          eachPrefix +
          '$property precisa ser maior ou igual à $constraint1 caracteres'
        );
      case ValidationTypes.MAX_LENGTH:
        return (
          eachPrefix +
          '$property precisa ser menor ou igual à $constraint1 caracteres'
        );
      case ValidationTypes.MATCHES:
        return (
          eachPrefix +
          '$property deve corresponder a expressão regular $constraint1'
        );
      case ValidationTypes.IS_MILITARY_TIME:
        return (
          eachPrefix +
          '$property deve ser uma representação válida do horário militar no formato HH:MM'
        );
      case ValidationTypes.IS_HASH:
        return (
          eachPrefix + '$property precisa ser um hash do tipo $constraint1'
        );
      case ValidationTypes.IS_ISSN:
        return eachPrefix + '$property precisa ser um ISSN';

      /* array checkers */
      case ValidationTypes.ARRAY_CONTAINS:
        return eachPrefix + '$property precisa conter $constraint1';
      case ValidationTypes.ARRAY_NOT_CONTAINS:
        return eachPrefix + '$property não pode conter $constraint1';
      case ValidationTypes.ARRAY_NOT_EMPTY:
        return eachPrefix + '$property não pode ser vazio';
      case ValidationTypes.ARRAY_MIN_SIZE:
        return (
          eachPrefix +
          '$property precisa conter pelo menos $constraint1 elementos'
        );
      case ValidationTypes.ARRAY_MAX_SIZE:
        return eachPrefix + '$property não pode conter mais que $constraint1';
      case ValidationTypes.ARRAY_UNIQUE:
        return `${eachPrefix}Todos os elementos de $property deve ser único`;

      case ValidationTypes.IS_INSTANCE:
        return (args: ValidationArguments) => {
          if (args.constraints[0]) {
            return (
              eachPrefix +
              `$property precisa ser uma instância de ${args.constraints[0].name}`
            );
          } else {
            return (
              eachPrefix +
              `${ValidationTypes.IS_INSTANCE} decorador espera um objeto como valor, mas obteve valor falso.`
            );
          }
        };
      default:
        return orig(type, isEach);
    }
  };
}

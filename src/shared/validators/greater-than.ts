import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isGreaterThan', async: false })
class IsGreaterThanConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    if (!relatedValue) return true;
    return value > relatedValue;
  }

  defaultMessage(args: ValidationArguments): string {
    return `($value) precisa ser maior que ${args.constraints[0]}!`;
  }
}

export function IsGreaterThan<T>(
  property: keyof T,
  validationOptions?: ValidationOptions
): any {
  return (object: T, propertyName: string): any => {
    registerDecorator({
      name: 'isGreaterThan',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: IsGreaterThanConstraint,
    });
  };
}

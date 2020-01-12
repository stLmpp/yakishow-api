"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function IsGreaterThan(property, validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'isGreaterThan',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: IsGreaterThanConstraint,
        });
    };
}
exports.IsGreaterThan = IsGreaterThan;
let IsGreaterThanConstraint = class IsGreaterThanConstraint {
    validate(value, args) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = args.object[relatedPropertyName];
        if (!relatedValue)
            return true;
        return value > relatedValue;
    }
    defaultMessage(args) {
        return `($value) precisa ser maior que ${args.constraints[0]}!`;
    }
};
IsGreaterThanConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ name: 'isGreaterThan', async: false })
], IsGreaterThanConstraint);
//# sourceMappingURL=greater-than.js.map
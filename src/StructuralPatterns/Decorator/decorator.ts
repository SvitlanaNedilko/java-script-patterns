function Validate(target: any, propertyKey: string, parameterIndex: number) {
  const existingRequiredParameters: number[] =
    Reflect.getOwnMetadata('requiredParameters', target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata('requiredParameters', existingRequiredParameters, target, propertyKey);
}

function ValidateParameters(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const requiredParameters: number[] = Reflect.getOwnMetadata(
      'requiredParameters',
      target,
      propertyKey
    );
    if (requiredParameters) {
      for (const index of requiredParameters) {
        if (args[index] === undefined) {
          throw new Error(
            `Missing required argument at position ${index} in method ${propertyKey}`
          );
        }
      }
    }
    return method.apply(this, args);
  };
}

class UserService {
  @ValidateParameters
  createUser(@Validate name: string, @Validate age: number) {
    console.log(`User created: ${name}, Age: ${age}`);
  }
}

const userService = new UserService();

try {
  userService.createUser('John', 30);
} catch (error) {
  console.error(error.message);
}

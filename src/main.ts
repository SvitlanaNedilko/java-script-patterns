import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { factoryMethod } from './CreationalPatterns/Factory/factoryMathod';
import { abstractFactory } from './CreationalPatterns/Factory/abstractFactory';
import { isPrototype } from './CreationalPatterns/Prototype/prototype';
import { singleTone } from './CreationalPatterns/SingleTone/singleTone';
import { adapterPatter } from "./StructuralPatterns/Adapter/adapter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  abstractFactory();
  factoryMethod();
  isPrototype();
  singleTone();
  adapterPatter();
}
bootstrap();

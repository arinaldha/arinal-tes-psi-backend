import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutModule } from './checkout/checkout.module';
import { CombinationController } from './combination/combination.controller';
import { CombinationService } from './combination/combination.service';
import { ManipulateModule } from './manipulate/manipulate.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CheckoutModule,
    ManipulateModule,
    HttpModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: parseInt(process.env.DB_PORT),
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: true,
    }),
    PassportModule.register({ session: true }),
  ],
  controllers: [AppController, CombinationController],
  providers: [AppService, CombinationService],
})
export class AppModule {}

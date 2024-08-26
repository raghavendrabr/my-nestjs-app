import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // or your database host
      port: 5432, // default PostgreSQL port
      username: 'postgres', // replace with your PostgreSQL username
      password: 'pass', // replace with your PostgreSQL password
      database: 'test_db', // replace with your PostgreSQL database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}

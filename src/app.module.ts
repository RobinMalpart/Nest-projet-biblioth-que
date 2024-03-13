import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HomeModule } from "./home/home.module";
import { UsersService } from "./users/users.service";
import { BooksModule } from "./books/books.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    HomeModule,
    UsersModule,
    BooksModule, // Use the imported BooksModule here
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "un_mdp_comme_un_autre!",
      database: "bibli",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}

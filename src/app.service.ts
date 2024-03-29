import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./users/entities/user.entity";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getHello(): string {
    return "Hello World!";
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersDto } from './dtos/get-users.dto';
import { User } from './models/user.model';

@ApiTags('USERS')
@Controller('api/users')
export class AppController {

  private get users(): User[] {
    return [
      {
        firstName: 'John',
        secondName: 'Anderson',
        nickname: 'johnny77',
        age: 67,
      },
      {
        firstName: 'Marry',
        secondName: 'Johnson',
        nickname: 'marry',
        age: 24,
      },
      {
        firstName: 'Brendt',
        secondName: 'Johanson',
        nickname: 'OzzyRock$',
        age: 10,
      },
      {
        firstName: 'Bartolomeo',
        secondName: 'Rendi',
        nickname: 'brendi',
        age: 70,
      },
    ];
  }

  @Post()
  public async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return createUserDto;
  }

  @Get()
  public async getUsers(@Query() getUsersDto: GetUsersDto): Promise<User[]> {
    return this.users.filter(user => user.age >= getUsersDto.age);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from './schema/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userService.create(user);
  }
  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Observable<User> {
    return this.userService.findOne(id);
  }
  @Put(':id')
  updateOne(@Param('id') id: number, @Body() user: User): Observable<any> {
    return this.userService.updateOne(id, user);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: number): Observable<User> {
    return this.userService.deleteOne(id);
  }
}

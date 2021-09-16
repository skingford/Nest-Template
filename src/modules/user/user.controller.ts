/*
 * @Author: kingford
 * @Date: 2021-09-11 19:23:34
 * @LastEditTime: 2021-09-16 23:12:28
 */
/*
 * @Author: kingford
 * @Date: 2021-09-11 08:51:10
 * @LastEditTime: 2021-09-11 15:10:56
 */
/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-09 23:51:13
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../core/decorators/roles.decorator';
import { Role } from '../auth/roles/roles.interface';
import { RolesGuard } from '../auth/guards/roles.guard';
import { User } from './entities/user.entity';

@ApiTags('用户详情')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ type: User })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiResponse({ type: [User] })
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({ type: User })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return this.userService.findOne(+id);
  }

  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ type: User })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    return this.userService.remove(+id);
  }
}

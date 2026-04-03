import { Body, Controller, Get, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { ConfigService } from './config.service';
import { HouseConfigDto } from './dto/house-config.dto';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('house')
  getHouseConfig() {
    return this.configService.getHouseConfig();
  }

  @Put('house')
  @HttpCode(HttpStatus.OK)
  updateHouseConfig(@Body() dto: HouseConfigDto) {
    return this.configService.updateHouseConfig(dto);
  }
}

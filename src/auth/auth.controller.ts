import { Get, Controller, UseGuards, Req } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guard';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserDetails } from 'src/utils/type';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { message: 'Google Authentication' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect(@Req() request: Request) {
    const user = request.user as UserDetails;
    const { email, displayName } = user;
    return {
      message: 'OK',
      user: request.user,
      access_token: this.jwtService.sign({ email, displayName }),
    };
  }

  @Get('status')
  async user(@Req() request: Request) {
    if (request.user) {
      return { message: 'Authenticated', user: request.user };
    } else {
      return { message: 'Not Authenticated' };
    }
  }
}

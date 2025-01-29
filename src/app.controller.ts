import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): Response {
    const data = {
      email: 'tbidemi160@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/bidex160/hngi12-task0',
    };
    return res.status(200).json({
      status: true,
      data: data,
    });
  }
}

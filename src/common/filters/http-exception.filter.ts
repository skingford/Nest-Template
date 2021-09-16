/*
 * @Author: kingford
 * @Date: 2021-09-05 22:45:29
 * @LastEditTime: 2021-09-16 20:53:42
 */

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger, logResponse } from '@/utils/log';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const logFormat = logResponse({
      req: request,
      res: exception.toString(),
      status,
    });

    Logger.error(logFormat);

    console.log('HttpExceptionFilter:', exception);

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
      data: exception.getResponse(),
    });
  }
}

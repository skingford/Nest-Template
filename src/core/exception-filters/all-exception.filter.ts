/*
 * @Author: kingford
 * @Date: 2021-09-11 16:22:07
 * @LastEditTime: 2021-09-16 22:59:23
 */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';
import { Logger, logResponse } from '@/utils/log';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const logFormat = logResponse({
      req: request,
      res: exception.toString(),
      status,
    });

    Logger.error(logFormat);

    response.status(status).json({
      statusCode: status,
      message: (exception as RuntimeException).message || 'Internal Error',
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

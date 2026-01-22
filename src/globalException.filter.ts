/* eslint-disable class-methods-use-this */
import { EXCEPTION_MESSAGE } from '@constants/messages';
import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpException } from '@nestjs/common';
import type { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception instanceof HttpException ? exception.getStatus() : EXCEPTION_MESSAGE.server.status;
    const errorMessage =
      exception instanceof HttpException ? exception.getResponse() : EXCEPTION_MESSAGE.server.message;

    response.status(status).json({
      status,
      result: {
        message: typeof errorMessage === 'string' ? errorMessage : (errorMessage as any)?.message,
      },
    });
  }
}

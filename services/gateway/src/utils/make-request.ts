import { timeout, catchError } from 'rxjs/operators';
import { GatewayTimeoutException, HttpException, Logger } from '@nestjs/common';
import { TimeoutError, throwError } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { isNumber } from 'util';

const logger = new Logger('MakeRequest');
export const makeRequest = async (
  client: ClientProxy,
  pattern: any,
  payload: any = null,
): Promise<any> => {
  return client
    .send(pattern, payload)
    .pipe(
      timeout(10000),
      catchError(err => {
        const { status, message } = err;
        logger.error(`${err.message}: ${JSON.stringify(pattern) || pattern}`);

        if (err instanceof TimeoutError) {
          return throwError(new GatewayTimeoutException(err.message));
        }

        throw new HttpException(message, isNumber(status) ? status : 500);
      }),
    )
    .toPromise();
};

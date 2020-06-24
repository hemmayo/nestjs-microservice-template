import { timeout, catchError } from 'rxjs/operators';
import { GatewayTimeoutException, HttpException, Logger } from '@nestjs/common';
import { TimeoutError, throwError } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

const logger = new Logger('MakeRequest');
export const makeRequest = async (
  client: ClientProxy,
  pattern: any,
  payload: any,
): Promise<any> => {
  return client
    .send(pattern, payload)
    .pipe(
      timeout(5000),
      catchError(err => {
        logger.error(`${err.message}: ${JSON.stringify(pattern) || pattern}`);
        if (err instanceof TimeoutError) {
          return throwError(new GatewayTimeoutException(err.message));
        }
        throw new HttpException(err.message, err.status);
      }),
    )
    .toPromise();
};

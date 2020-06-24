import { timeout, catchError } from 'rxjs/operators';
import { GatewayTimeoutException, HttpException } from '@nestjs/common';
import { TimeoutError, throwError } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

export const makeRequest = async (
  client: ClientProxy,
  pattern: any,
  payload: any,
): Promise<any> => {
  return await client
    .send(pattern, payload)
    .pipe(
      timeout(5000),
      catchError(err => {
        if (err instanceof TimeoutError) {
          return throwError(new GatewayTimeoutException(err.message));
        }
        throw new HttpException(err.message, err.status);
      }),
    )
    .toPromise();
};

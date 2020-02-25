import { BaseRequest } from './base-request.service';

export class DummyRequestService extends BaseRequest {

  get(): void {

  }

  post(endpoint: string, requestData: any): void {

  }
}


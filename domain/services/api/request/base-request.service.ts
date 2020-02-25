import { IApiResponse } from '../api.interfaces';

export abstract class BaseRequest {

  abstract get(): void;
  abstract post(endpoint: string, requestData: any): Promise<IApiResponse>;



}

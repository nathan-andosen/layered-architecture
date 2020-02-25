

export abstract class BaseRequest {

  abstract get(): void;
  abstract post(endpoint: string, requestData: any): void;



}

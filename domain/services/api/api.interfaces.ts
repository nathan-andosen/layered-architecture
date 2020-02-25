
// The api json structure returned from every api request
export interface IApiResponse {
  success: boolean;
  data?: any;
  errors?: string[];
}

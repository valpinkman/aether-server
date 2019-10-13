import { NowRequest, NowResponse } from '@now/node'

type Method = 'POST' | 'GET'

export default function wrapper(
  func: (req: NowRequest, res: NowResponse) => Promise<any>,
  method?: Method
) {
  return (request: NowRequest, response: NowResponse) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (method && request.method !== method) {
      return response
        .status(405)
        .json({ status: 'ko', message: `only ${method} requests accepted` });
    }

    return func(request, response);
  };
}
import { NowRequest, NowResponse } from '@now/node'
import pkg from '../package.json'

export default (req: NowRequest, res: NowResponse) => {
  return res.json({
    status: 'ok',
    version: pkg.version,
    name: pkg.name
  });
}
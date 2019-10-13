import { NowRequest, NowResponse } from '@now/node'
import { resolveUrl } from '../services/comicvine'
import wrapper from '../helpers/wrapper'

export default wrapper(async (req: NowRequest, res: NowResponse) => {
  const { url } = JSON.parse(req.body);
  if (!url) {
    return res.status(400).json({ status: 'ko', message: 'request must provide a `url` key in body' })
  }

  try {
    const response = await resolveUrl(url)
    console.log('response', response)
    res.status(200).json({
      status: 'ok',
      data: response
    })
  } catch (error) {
    throw error
  }
}, 'POST')
import { NowRequest, NowResponse } from '@now/node'
import { searchVolume } from '../services/comicvine'
import wrapper from '../helpers/wrapper'

export default wrapper(async (req: NowRequest, res: NowResponse) => {
  const { query, page } = JSON.parse(req.body);
  if (!query) {
    return res.status(400).json({ status: 'ko', message: 'request must provide a `query` key in body' })
  }

  if (!page) {
    return res.status(400).json({ status: 'ko', message: 'request must provide a `page` key in body' })
  }

  try {
    const response = await searchVolume(query, page)
    res.status(200).json({
      status: 'ok',
      data: response
    })
  } catch (error) {
    throw error
  }
}, 'POST')
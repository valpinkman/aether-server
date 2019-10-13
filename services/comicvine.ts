import fetch from 'isomorphic-unfetch'

const URL = 'http://api.comicvine.com'

export const searchVolume = async (query: string, page: number = 1) => {
  try {
    const res = await fetch(
      `${URL}/search?query=${query}&api_key=${process.env.COMICVINE_API}&resources=volume&format=json&page=${page}`
    );
    const json = await res.json()
    return json
  } catch (error) {
    throw error
  }
}

export const resolveUrl = async (url: string) => {
  try {
    const res = await fetch(`${url}?api_key=${process.env.COMICVINE_API}&format=json`)
    console.log('res', res)
    const json = await res.json()
    console.log(json)
    return json
  } catch (error) {
    throw error
  }
}
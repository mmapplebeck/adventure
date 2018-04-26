import request from 'superagent'
import queryString from 'query-string'

const API_URL = 'https://api.myjson.com/bins'

function getUrl() {
  const parsed = queryString.parseUrl(window.location.href)
  return parsed.query.url
}

export async function loadFromDB() {
  try {
    const url = getUrl()
    if (url) {
      const response = await request.get(url)
      return response.body
    } else {
      return undefined
    }
  } catch(err) {
    return undefined
  }
}


export function saveToDB(gameState) {
  return request
          .post(API_URL)
          .send(gameState)
          .then(res => res.body.uri)
}

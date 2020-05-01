import axios from 'axios'

const bingHeaders = { 'Ocp-Apim-Subscription-Key': '6531265601e14817891f0eca07a7f339' }

export const getImage = (searchTerm) => {
  return axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchTerm}&count=1&offset=0&mkt=en-us&safeSearch=Strict`, { headers: bingHeaders })
}

export const getLookalike = (imgUrl) => {
  console.log('get Lookalike has run')
  return axios({
    'method': 'POST',
    'url': 'https://luxand-cloud-face-recognition.p.rapidapi.com/photo/celebrity',
    'headers': {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'luxand-cloud-face-recognition.p.rapidapi.com',
      'x-rapidapi-key': '0ba40d33f3msh1b748d0ff54aed7p1f8556jsnac21c48a1bba'
    }, 'params': {
      'photo': imgUrl
    }, 'data': {

    }
  })
}
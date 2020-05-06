import axios from 'axios'

const bingHeaders = { 'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_KEY }

export const getImage = (searchTerm) => {
  return axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchTerm}&count=1&offset=0&mkt=en-us&safeSearch=Strict`, { headers: bingHeaders })
}

export const getLookalike = (imgUrl) => {
  return axios({
    'method': 'POST',
    'url': 'https://luxand-cloud-face-recognition.p.rapidapi.com/photo/celebrity',
    'headers': {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'luxand-cloud-face-recognition.p.rapidapi.com',
      'x-rapidapi-key': `${process.env.REACT_APP_RAPID_KEY}`
    }, 'params': {
      'photo': imgUrl
    }, 'data': {

    }
  })
}
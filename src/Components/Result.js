
import React from 'react'
import { getImage, getLookalike } from '../lib/api'
import Spinner from './Spinner'

class Result extends React.Component {
  state = {
    stockImages: [
      'https://media.newyorker.com/photos/5d67f40fa15e8f0009d9a094/2:1/w_2560,h_1280,c_limit/190909_r34891.jpg',
      'https://www.biography.com/.image/t_share/MTU1MTU2MTM5OTc2MTczNTI2/-photo-by-max-mumby-indigo-getty-images-square.jpg',
      'https://cdn.entertainmentdaily.com/2019/07/13105634/coverimages31710293-e1563011827473.jpg',
      'https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000577901903-1.jpg',
      'https://image.cnbcfm.com/api/v1/image/106479371-1586300131122rts38dfs.jpg?v=1586300219&w=678&h=381',
      'https://files.list.co.uk/images/2011/09/15/reginald-d-hunter-2011-lst090437.jpg',
      'https://i.pinimg.com/originals/de/97/2e/de972e8bb0ab9c397709257aba9a0502.jpg'
    ],
    userImage: '',
    lookalike: '',
    celebImage: ''
  }

  async componentDidMount() {
    console.log('mouted')
    try {
      console.log('try successful')
      this.setState({ userImage: this.props.location.state.userImage })
      console.log(this.props.location.state.userImage)
      console.log(this.state.userImage)
      this.shufflePictures()
      // this.setState({ lookalike:  })
      this.getCelebName()
      
    } catch (err) {
      console.log(err)
    }
  }
  
  shufflePictures = () => {
    let i = 0
    const shuffle = setInterval(() => {
      if (this.state.lookalike){
        clearInterval(shuffle)
        return
      } 
      this.setState({ celebImage: this.state.stockImages[i] })
      if (i === this.state.stockImages.length - 1){
        i = 0
      } else {
        i++
      }
    }, 300)
  }


  getCelebName = async () => {
    try {
      console.log('get celeb name has ran')
      const res = await getLookalike(this.props.location.state.userImage)
      console.log(this.state.userImage)
      console.log('response', res.data)
      this.setState({ lookalike: res.data.result[0].name })
      this.getCelebImage()
      // return res.data.result[0].name
      // console.log(this.state.lookalike)
    } catch {
      this.setState({ lookalike: 'No Idea, try another image' })
      this.setState({ celebImage: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woman-shrugging.png' })
    }
  }

  getCelebImage = async () => {
    try {
      console.log('Get Celeb Ran')
      const celeb = this.state.lookalike
      const res = await getImage(celeb)
      console.log(res.data.value[0].thumbnailUrl)
      this.setState({ celebImage: res.data.value[0].thumbnailUrl })
      console.log('state:', this.state)

    } catch (err) {
      console.log(err.response)
    }
  }


  handleClick = () => {

    this.props.history.push('/')
  }

  render() {
    console.log('state', this.state)

    if (!this.state.userImage) return <Spinner />
    return (
      <>
        <div className="columns">
          <div className="column is-one-quarter">
            <figure className="image is-1by1">
              <img src={this.state.userImage} alt={this.state.userImage} />
            </figure>
          </div>
          <div className="column is-one-quarter">
            <figure className="image is-1by1">
              <img src={this.state.celebImage} alt={this.state.celebImage} />
            </figure>
          </div>
        </div>
        <h1>Your Lookalike is: {this.state.lookalike}</h1>
        <button className="button is-danger is-half" onClick={this.handleClick}>Try again</button>

      </>
    )
  }

}

export default Result


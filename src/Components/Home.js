import React from 'react'
import axios from 'axios'
import Result from './Result'
import { Link } from 'react-router-dom'


class Home extends React.Component {

  state = {
    formData: {
      userImage: ''
    },
    errors: {} //* For error messaging in handleSubmit() - try and catch 
  }

  handleChange = event => {
    const formData = { ...this.state, [event.target.name]: event.target.value }

    const errors = { ...this.state.errors, [event.target.name]: '' }

    this.setState({ formData, errors })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('this is handleSubmit fnuction', this.state.formData.userImage)
  }

  handleClick = () => {
    // this.props.history.push('/result/')
    console.log('this is the handleClick funtion', this.state.formData.userImage)
  }

  render() {
    const { formData } = this.state
    return (
      <div className="container">
        <section className="Hero hero is-danger is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1 has-text-white">
                Celebrity Generator
				</h1>
              <p className="subtitle has-text-white is-4">
                Who do you look like?
				</p>
            </div>
          </div>
        </section>

        <div className="control has-icons-right">
          <form onSubmit={this.handleSubmit}>

            <input
              onChange={this.handleChange}
              className="input is-hovered is-large"
              type="text"
              name="userImage"
              value={formData.userImage}
              placeholder="photo url goes here ..."

            />
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </form>
        </div>

        <div className="container">
          <Link to={{ pathname: '/result', state: { userImage: this.state.formData.userImage } }} className="button is-link is-danger is-large is-fullwidth">Go find my celebrity </Link>
        </div>

      </div>
    )
  }
}







export default Home
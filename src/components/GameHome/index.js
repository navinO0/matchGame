import {Component} from 'react'

import CategoryCard from '../CategoryCard'
import OptImageCard from '../OptImageCard'
import Header from '../Header'

import './index.css'

class GameHome extends Component {
  state = {
    filteredItemcategory: 'FRUIT',

    qn: {},

    score: 0,
    timer: 60,
    gameover: false,
  }

  GameTimer = null

  GameOverTimer = null

  componentDidMount() {
    this.initialMatchImage()
    this.startTimer()
    this.setGameOverTimer()
  }

  setGameOverTimer = () => {
    this.GameOverTimer = setTimeout(() => {
      clearInterval(this.GameTimer)
      this.setState({gameover: true})
    }, 60000)
  }

  initialMatchImage = () => {
    const {imagesList} = this.props
    this.setState({qn: imagesList[0]})
  }

  startTimer = () => {
    this.GameTimer = setInterval(() => {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }, 1000)
  }

  retryGame = () => {
    this.setState({gameover: false, timer: 60, score: 0})
    this.getRandIndexImage()
    this.startTimer()
    this.setGameOverTimer()
  }

  getRandIndexImage = () => {
    const {imagesList} = this.props
    const randIndexGen = Math.floor(Math.random() * 30)
    const qnObject = imagesList[randIndexGen]

    this.setState({qn: qnObject})
  }

  gameOverCad = () => {
    const {score} = this.state
    return (
      <div className="game-over-card-main-container">
        <div className="game-over-card-container">
          <div className="trophy-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
              className="trp-icon"
            />
          </div>
          <div className="display-score-container">
            <p className="score-heading">YOUR SCORE</p>
            <p className="score">{score}</p>
          </div>
          <div className="play-again-btn-container">
            <button
              type="button"
              onClick={this.retryGame}
              className="play-again-btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                alt="reset"
                className="reset-icon"
              />
              PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    )
  }

  onClickAnsImg = id => {
    const {qn} = this.state

    if (qn.id === id) {
      this.setState(prevState => ({score: prevState.score + 1, timer: 60}))
      this.getRandIndexImage()
      clearInterval(this.GameTimer)
      clearInterval(this.GameOverTimer)
      this.startTimer()
      this.setGameOverTimer()
    } else {
      clearInterval(this.GameTimer)
      this.setState({gameover: true})
      this.setGameOverTimer()
    }
  }

  onClickChangeCategory = id => {
    this.setState({filteredItemcategory: id})
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {filteredItemcategory, qn, score, timer, gameover} = this.state

    const filteredItems = imagesList.filter(
      eachOne => eachOne.category === filteredItemcategory,
    )
    return (
      <div className="main-container">
        <Header score={score} timer={timer} />
        {gameover ? (
          this.gameOverCad()
        ) : (
          <div className="game-home-sub-container">
            <div className="game-comp-img-container">
              <img
                src={qn.imageUrl}
                alt="match"
                className="compselected-image"
              />{' '}
            </div>
            <ul className="category-list-container">
              {tabsList.map(eachOne => (
                <CategoryCard
                  key={eachOne.tabId}
                  onClickChangeCategory={this.onClickChangeCategory}
                  eachOne={eachOne}
                  filteredItemcategory={filteredItemcategory}
                />
              ))}
            </ul>
            <ul className="opt-thumb-list-container">
              {filteredItems.map(eachOne => (
                <OptImageCard
                  key={eachOne.id}
                  onClickAnsImg={this.onClickAnsImg}
                  eachOne={eachOne}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default GameHome

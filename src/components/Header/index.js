import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <div className="header-main-container">
      <div className="header-company-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="web-s-image"
        />
      </div>
      <ul className="score-timer-container">
        <li className="score-container">
          <p className="score-text">
            Score: <span className="score-span">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <div className="timer-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
              alt="timer"
              className="timer-logo"
            />
            <p className="timer-text">{`${timer} sec`}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Header

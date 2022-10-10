import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isMatchOn} = props

  return (
    <div className="navbar-container">
      <div className="icon-logo-score-container">
        <div className="icon-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="emoji-icon-name">Emoji Game</h1>
        </div>
        {isMatchOn && (
          <div className="score-container">
            <p className="current-score">Score: {currentScore}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
